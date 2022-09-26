import { args_flat } from "../../args_flat"

import type { MaybeArgs } from "../../args_flat"

/**
 * Get the average of an array
 *
 */
export function average(...args: MaybeArgs<number>): number {
	const array = args_flat(args)
	return array.reduce((sum, v) => (sum += v), 0) / array.length
}
