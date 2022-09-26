/**
 * Create a new subset object by giving keys
 *
 * @category Object
 */
export function picker<O, T extends keyof O>(
	obj: O,
	keys: T[],
	omit_undefined = false
) {
	return keys.reduce((n, k) => {
		if (k in obj) {
			if (!omit_undefined || obj[k] !== undefined) n[k] = obj[k]
		}
		return n
	}, {} as Pick<O, T>)
}
