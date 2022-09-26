export const listify = <TValue, TKey extends string | number | symbol, KResult>(
	obj: Record<TKey, TValue>,
	toItem: (key: TKey, value: TValue) => KResult
) => {
	if (!obj) return []
	const entries = Object.entries(obj)
	if (entries.length === 0) return []
	return entries.reduce((acc, entry) => {
		return [...acc, toItem(entry[0] as TKey, entry[1] as TValue)]
	}, [] as KResult[])
}
