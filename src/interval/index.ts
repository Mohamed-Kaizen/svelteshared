import { writable } from "svelte/store"

import { interval_fn } from "../interval_fn"
import { to_readable } from "../to_readable"

import type { Readable, Writable } from "svelte/store"

import type { Pauseable } from "../utils"

export interface IntervalOptions<Controls extends boolean> {
	/**
	 * Expose the controls
	 *
	 * @default false
	 */
	controls?: Controls

	/**
	 * Execute the update immediately on calling
	 *
	 * @default true
	 */
	immediate?: boolean
	/**
	 * Callback on every interval
	 */
	callback?: (count: Writable<number>) => void
}

/**
 * Reactive counter increases on every interval
 *
 * @param interval
 * @param options
 */
export function interval(
	interval?: number,
	options?: IntervalOptions<false>
): Readable<number>
export function interval(
	interval: number,
	options: IntervalOptions<true>
): { counter: Readable<number> } & Pauseable
export function interval(
	interval = 1000,
	options: IntervalOptions<boolean> = {}
) {
	const {
		controls: expose_controls = false,
		immediate = true,
		callback,
	} = options

	const counter = writable(0)

	const controls = interval_fn(
		callback
			? () => callback(counter)
			: () => counter.update((c) => (c += 1)),
		interval,
		{ immediate }
	)

	if (expose_controls) {
		return {
			counter: to_readable(counter),
			...controls,
		}
	}
	return to_readable(counter)
}
