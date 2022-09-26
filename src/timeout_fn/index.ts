import { writable } from "svelte/store"

import { to_readable } from "../to_readable"
import { try_on_destroy } from "../try_on_destroy"
import { unstore } from "../unstore"
import { is_client, is_readable } from "../utils"

import type { Stoppable, MaybeStore } from "../utils"

export interface TimeoutFnOptions {
	/**
	 * Start the timer immediate after calling this function
	 *
	 * @default true
	 */
	immediate?: boolean
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param options
 */
export function timeout_fn(
	cb: (...args: unknown[]) => any,
	interval: MaybeStore<number>,
	options: TimeoutFnOptions = {}
): Stoppable {
	const { immediate = true } = options

	const isPending = writable(false)

	let timer: number | null = null

	function clear() {
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
	}

	function stop() {
		isPending.set(false)
		clear()
	}

	function start(...args: unknown[]) {
		clear()
		isPending.set(true)
		timer = setTimeout(
			() => {
				isPending.set(false)
				timer = null
				cb(...args)
			},
			is_readable(interval) ? unstore(interval) : interval
		) as unknown as number
	}

	if (immediate) {
		isPending.set(true)
		if (is_client) {
			start()
		}
	}

	try_on_destroy(stop)

	return {
		isPending: to_readable(isPending),
		start,
		stop,
	}
}

// alias
export { timeout_fn as timeoutFn }
