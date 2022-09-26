export function unique<T, K extends string | number | symbol>(
	list: T[],
	fn: (item: T) => K
) {
	const valueMap = list.reduce((acc, item) => {
		const key = fn ? fn(item) : (item as any as string | number | symbol)
		if (acc[key]) return acc
		return { ...acc, [key]: item }
	}, {} as Record<string | number | symbol, T>)
	return Object.values(valueMap)
}
