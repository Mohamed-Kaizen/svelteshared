export interface ClusterOptions {
	/**
	 * The size of each list.
	 *
	 * @default 2
	 */
	size?: number
}

/**
 * Splits a single list into many lists of the desired size. If
 * given a list of 10 items and a size of 2, it will return 5
 * lists with 2 items each
 *
 */
export function cluster<T>(list: T[], options: ClusterOptions = {}): T[][] {
	const { size = 2 } = options

	const clusterCount = Math.ceil(list.length / size)

	return new Array(clusterCount).fill(null).map((_c: null, i: number) => {
		return list.slice(i * size, i * size + size)
	})
}
