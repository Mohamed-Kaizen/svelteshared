import { args_flat } from "../../args_flat"

import type { MaybeArgs } from "../../args_flat"

/**
 * Get the sum of a set of numbers.
 *
 */
export function sum(...args: MaybeArgs<number>): number {
	const array = args_flat(args)
	return array.reduce((sum, v) => (sum += v), 0)
}
