export function group<T>(list: T[], fn: (item: T) => string) {
	return list.reduce((acc, item) => {
		const id = fn(item)
		const groupList = acc[id] ?? []
		return { ...acc, [id]: [...groupList, item] }
	}, {} as Record<string, T[]>)
}
