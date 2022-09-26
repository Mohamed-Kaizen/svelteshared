import { args_flat } from "../../args_flat"

import type { MaybeArgs } from "../../args_flat"

/**
 * Get minimum of values
 *
 */
export function min(...args: MaybeArgs<number>): number {
	const array = args_flat(args)
	return Math.min(...array)
}
