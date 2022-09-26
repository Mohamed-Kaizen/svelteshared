import { type } from "../type"

export function len<T>(item: T): number {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (type(item) === "set") return item.size
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (type(item) === "object") return Object.keys(item).length
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return item.length
}
