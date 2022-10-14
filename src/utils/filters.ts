import { readable } from "svelte/store"

import type { Fn, Pauseable } from "./types"

export type FunctionArgs<Args extends any[] = any[], Return = void> = (
	...args: Args
) => Return

export interface FunctionWrapperOptions<
	Args extends any[] = any[],
	This = any
> {
	fn: FunctionArgs<Args, This>
	args: Args
	thisArg: This
}

export type EventFilter<Args extends any[] = any[], This = any> = (
	invoke: Fn,
	options: FunctionWrapperOptions<Args, This>
) => void

export interface ConfigurableEventFilter {
	/**
	 * Filter for if events should to be received.
	 *
	 */
	eventFilter?: EventFilter
}

export interface DebounceFilterOptions {
	/**
	 * The maximum time allowed to be delayed before it's invoked.
	 * In milliseconds.
	 */
	maxWait?: number
}

/**
 * @internal
 */
export function create_filter_wrapper<T extends FunctionArgs>(
	filter: EventFilter,
	fn: T
) {
	function wrapper(this: any, ...args: any[]) {
		filter(() => fn.apply(this, args), { fn, thisArg: this, args })
	}

	return wrapper as any as T
}

export const bypassFilter: EventFilter = (invoke) => {
	return invoke()
}

/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 * @param options
 */
export function debounce_filter(
	ms: number,
	options: DebounceFilterOptions = {}
) {
	let timer: ReturnType<typeof setTimeout> | undefined
	let maxTimer: ReturnType<typeof setTimeout> | undefined | null

	const filter: EventFilter = (invoke) => {
		const duration = ms
		const maxDuration = options.maxWait

		if (timer) clearTimeout(timer)

		if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
			if (maxTimer) {
				clearTimeout(maxTimer)
				maxTimer = null
			}
			return invoke()
		}

		// Create the maxTimer. Clears the regular timer on invoke
		if (maxDuration && !maxTimer) {
			maxTimer = setTimeout(() => {
				if (timer) clearTimeout(timer)
				maxTimer = null
				invoke()
			}, maxDuration)
		}

		// Create the regular timer. Clears the max timer on invoke
		timer = setTimeout(() => {
			if (maxTimer) clearTimeout(maxTimer)
			maxTimer = null
			invoke()
		}, duration)
	}

	return filter
}

/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 * @param [leading=true]
 */
export function throttle_filter(ms: number, trailing = true, leading = true) {
	let lastExec = 0
	let timer: ReturnType<typeof setTimeout> | undefined
	let isLeading = true

	const clear = () => {
		if (timer) {
			clearTimeout(timer)
			timer = undefined
		}
	}

	const filter: EventFilter = (invoke) => {
		const duration = ms
		const elapsed = Date.now() - lastExec

		clear()

		if (duration <= 0) {
			lastExec = Date.now()
			return invoke()
		}

		if (elapsed > duration && (leading || !isLeading)) {
			lastExec = Date.now()
			invoke()
		} else if (trailing) {
			timer = setTimeout(() => {
				lastExec = Date.now()
				isLeading = true
				clear()
				invoke()
			}, duration)
		}

		if (!leading && !timer)
			timer = setTimeout(() => (isLeading = true), duration)

		isLeading = false
	}

	return filter
}

/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the pauseable_filter is active, default to none
 *
 */
export function pauseable_filter(
	extendFilter: EventFilter = bypassFilter
): Pauseable & { eventFilter: EventFilter } {
	let is_active = true

	function pause() {
		is_active = false
	}
	function resume() {
		is_active = true
	}

	const eventFilter: EventFilter = (...args) => {
		if (is_active) extendFilter(...args)
	}

	return { is_active: readable(is_active), pause, resume, eventFilter }
}
