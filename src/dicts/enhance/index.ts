import { invert as _invert } from "../invert"
import { flat as _flat } from "../../lists"
import { to_writable } from "../../to_writable"

export function enhance<O, T extends keyof O>(obj: O) {
	const { subscribe } = to_writable(obj)

	function append(key: T, value: any) {
		obj[key] = value
	}

	function clear() {
		for (const key in obj) {
			delete obj[key]
		}
	}

	function contains(key: string) {
		return key in obj
	}

	function copy() {
		return enhance({ ...obj })
	}

	function fromkeys(keys: T[], value: any) {
		return enhance(
			keys.reduce((n, k) => {
				n[k] = value
				return n
			}, {} as Pick<O, T>)
		)
	}

	function get(key: T): any {
		return obj[key]
	}

	function invert() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return _invert(obj)
	}

	function items(option = { flat: false }) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const lists = Object.entries(obj)
		if (option.flat) return _flat(lists)
		return lists
	}

	function keys() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return Object.keys(obj)
	}

	function pop(key: T): any {
		const value = get(key)
		delete obj[key]
		return value
	}

	function popitem(): [T, any] {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const key = Object.keys(obj).pop() as T
		const value = pop(key)
		return [key, value]
	}

	function values() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return Object.values(obj)
	}

	return {
		subscribe,
		append,
		clear,
		contains,
		copy,
		fromkeys,
		get,
		invert,
		items,
		keys,
		pop,
		popitem,
		values,
	}
}
