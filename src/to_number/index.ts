export interface ToNumberOptions {
	/**
	 * Method to use to convert the value to a number.
	 *
	 * @default 'float'
	 */
	method?: "float" | "int"

	/**
	 * The base in mathematical numeral systems passed to `parseInt`.
	 * Only works with `method: 'parseInt'`
	 */
	radix?: number

	/**
	 * Replace NaN with zero
	 *
	 * @default false
	 */
	nanToZero?: boolean
}

export function to_number(
	value: number | string,
	options: ToNumberOptions = {}
): number {
	const { method, radix, nanToZero } = options

	let _method: "parseFloat" | "parseInt" = "parseFloat"

	if (method === "int") _method = "parseInt"

	let resolved =
		typeof value === "number" ? value : Number[_method](value, radix)

	if (nanToZero && isNaN(resolved)) resolved = 0

	return resolved
}

// alias
export { to_number as toNumber }
