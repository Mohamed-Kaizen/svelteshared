export function last<T>(list: T[], fallback: T | null | undefined = undefined) {
	return list?.length > 0 ? list.at(-1) : fallback
}
