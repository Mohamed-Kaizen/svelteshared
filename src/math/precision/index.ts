export interface PrecisionOptions {
	/**
	 * Method to use for rounding
	 *
	 * @default 'round'
	 */
	math?: "floor" | "ceil" | "round"
}

/**
 * Set the precision of a number.
 *
 */
export function precision(
	value: number,
	digits: number,
	options?: PrecisionOptions
): number | string {
	const power = 10 ** digits
	return Math[options?.math || "round"](value * power) / power
}
