export interface IntersectsOptions<T, K extends string | number | symbol> {
	fn?: (item: T) => K
}

export function intersects<T, K extends string | number | symbol>(
	listA: T[],
	listB: T[],
	options: IntersectsOptions<T, K> = {}
): [boolean, T[]] {
	const { fn = (item: T) => item as unknown as K } = options

	if (!listA || !listB) return [false, []]

	const dictB = listB.reduce(
		(acc, item) => ({ ...acc, [fn(item)]: true }),
		{} as Record<K, boolean>
	)

	return [
		listA.some((item) => dictB[fn(item)]),
		listA.filter((item) => dictB[fn(item)]),
	]
}
