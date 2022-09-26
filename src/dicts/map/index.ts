export const map = <
	TKey extends string | number | symbol,
	TValue,
	TNewKey extends string | number | symbol,
	TNewValue
>(
	obj: Record<TKey, TValue>,
	fn: (key: TKey, value: TValue) => [TNewKey, TNewValue]
): Record<TNewKey, TNewValue> => {
	if (!obj) return {} as Record<TNewKey, TNewValue>
	return Object.entries(obj).reduce((acc, [key, value]) => {
		const [newKey, newValue] = fn(key as TKey, value as TValue)
		return {
			...acc,
			[newKey]: newValue,
		}
	}, {} as Record<TNewKey, TNewValue>)
}
