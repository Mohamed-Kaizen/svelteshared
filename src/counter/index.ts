import { writable } from "svelte/store"

import { to_readable } from "../to_readable"
import { unstore } from "../unstore"

export interface CounterOptions {
	min?: number
	max?: number
}

/**
 * Basic counter with utility functions.
 *
 * @param [initial_value=0]
 * @param {Object} options
 */
export function counter(initial_value = 0, options: CounterOptions = {}) {
	const count = writable(initial_value)

	const { max = Infinity, min = -Infinity } = options

	const inc = (delta = 1) => count.set(Math.min(max, unstore(count) + delta))
	const dec = (delta = 1) => count.set(Math.max(min, unstore(count) - delta))
	const set = (val: number) => count.set(val)
	const reset = (val = initial_value) => {
		initial_value = val
		return set(val)
	}

	return { count: to_readable(count), inc, dec, set, reset }
}
