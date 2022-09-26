export function first<T>(
	list: T[],
	fallback: T | null | undefined = undefined
) {
	return list?.length > 0 ? list.at(0) : fallback
}
