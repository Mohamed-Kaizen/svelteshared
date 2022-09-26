import { writable } from "svelte/store"

import { to_readable } from "../to_readable"
import { try_on_destroy } from "../try_on_destroy"
import { unstore } from "../unstore"
import { is_client, is_readable } from "../utils"

import type { Fn, Pauseable, MaybeStore } from "../utils"

export interface IntervalFnOptions {
	/**
	 * Start the timer immediately
	 *
	 * @default true
	 */
	immediate?: boolean

	/**
	 * Execute the callback immediate after calling this function
	 *
	 * @default false
	 */
	immediate_callback?: boolean
}

/**
 * Wrapper for `setInterval` with controls
 *
 * @param cb
 * @param interval
 * @param options
 */
export function interval_fn(
	cb: Fn,
	interval: MaybeStore<number> = 1000,
	options: IntervalFnOptions = {}
): Pauseable {
	const { immediate = true, immediate_callback = false } = options

	const isActive = writable(false)

	let timer: any = null

	function clean() {
		if (timer) {
			clearInterval(timer)
			timer = null
		}
	}

	function pause() {
		isActive.set(false)
		clean()
	}

	function resume() {
		if (interval <= 0) {
			return
		}
		isActive.set(true)
		if (immediate_callback) {
			cb()
		}
		clean()
		timer = setInterval(
			cb,
			is_readable(interval) ? unstore(interval) : interval
		)
	}

	if (immediate && is_client) {
		resume()
	}

	try_on_destroy(pause)

	return {
		isActive: to_readable(isActive),
		pause,
		resume,
	}
}

// alias
export { interval_fn as intervalFn }
