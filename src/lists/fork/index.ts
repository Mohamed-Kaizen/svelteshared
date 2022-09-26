export function fork<T>(list: T[], fn: (item: T) => boolean): [T[], T[]] {
	if (!list) return [[], []]
	return list.reduce(
		(acc, item) => {
			const [a, b] = acc
			if (fn(item)) {
				return [[...a, item], b]
			} else {
				return [a, [...b, item]]
			}
		},
		[[], []] as [T[], T[]]
	)
}
