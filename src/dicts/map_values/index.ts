export const map_values = <
	TValue,
	TKey extends string | number | symbol,
	TNewValue
>(
	obj: Record<string, TValue>,
	fn: (value: TValue, key: string) => TNewValue
): Record<TKey, TNewValue> => {
	return Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			[key]: fn(obj[key], key),
		}),
		{} as Record<TKey, TNewValue>
	)
}

// alias
export { map_values as mapValues }
