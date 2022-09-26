import { args_flat } from "../../args_flat"

import type { MaybeArgs } from "../../args_flat"

/**
 * Get maximum of values
 *
 */
export function max(...args: MaybeArgs<number>): number {
	const array = args_flat(args)
	return Math.max(...array)
}
