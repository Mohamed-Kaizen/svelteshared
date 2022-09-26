export function flat<T>(lists: T[][]): T[] {
	return lists.reduce((acc, list) => {
		return [...acc, ...list]
	}, [])
}
