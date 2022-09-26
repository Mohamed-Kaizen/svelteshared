export interface SortOptions {
	property?: string
}

interface KeyPair<T> {
	[key: string]: T
}

export function sort<T>(list: T[], property: string) {
	if (!list) return []

	let sortOrder = 1

	if (property[0] === "-") {
		sortOrder = -1
		property = property.slice(1)
	}

	const order = (a: KeyPair<any>, b: KeyPair<any>) => {
		const result =
			a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
		return result * sortOrder
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return list.slice().sort(order)
}
