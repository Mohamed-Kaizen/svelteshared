import { range } from "../range"

interface SlugOptions {
	/**
	 * Use lower letters.
	 *
	 * @default true
	 */
	lower?: boolean

	/**
	 * Use uppercase letters.
	 *
	 * @default true
	 */
	upper?: boolean

	/**
	 * Use digits.
	 *
	 * @default true
	 */
	digits?: boolean

	/**
	 * Size of the slug.
	 *
	 * @default 6
	 * @minimum 2
	 */
	size?: number

	/**
	 * Text to use as a prefix.
	 *
	 */
	prefix?: string
}

export function slug(options: SlugOptions = {}): string {
	const { lower = true, upper = true, digits = true } = options

	let size = options.size || 6

	let chars = ""

	if (size <= 1) size = 2

	if (lower) chars += "abcdefghijklmnopqrstuvwxyz"

	if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	if (digits) chars += "0123456789"

	let slug = ""

	for (const _ of range(size - 1))
		slug += chars[Math.floor(Math.random() * chars.length)]

	return options.prefix ? `${options.prefix}-${slug}` : slug

	//     var result           = '';
	//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	//     var charactersLength = characters.length;
	//     for ( var i = 0; i < length; i++ ) {
	//       result += characters.charAt(Math.floor(Math.random() *
	//  charactersLength));
	//    }
	//    return result;
}
