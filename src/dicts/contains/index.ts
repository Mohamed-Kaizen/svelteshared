export function contains(obj: object, ...keys: string[]) {
	return keys.some((key) => key in obj)
}
