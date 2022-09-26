export function merge<T>(list: T[], other: T[], fn?: (item: T) => any): T[] {
	if (!other && !list) return []
	if (!other) return list
	if (!list) return []
	if (!fn) return list

	return list.reduce((acc, r) => {
		const matched = other.find((o) => fn(r) === fn(o))
		return matched ? [...acc, matched] : [...acc, r]
	}, [] as T[])
}
