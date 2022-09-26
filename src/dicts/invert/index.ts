export const invert = <
	TKey extends string | number | symbol,
	TValue extends string | number | symbol
>(
	obj: Record<string, TValue>
): Record<TValue, TKey> => {
	if (!obj) return {} as Record<TValue, TKey>
	return Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			[obj[key]]: key,
		}),
		{} as Record<TValue, TKey>
	)
}
