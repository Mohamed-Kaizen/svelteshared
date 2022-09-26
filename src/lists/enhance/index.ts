import { sort as _sort } from "../sort"
import { to_writable } from "../../to_writable"
import { is_def } from "../../utils"

export interface EnhanceSortOptions {
	/**
	 * Sorting type
	 *
	 * @default string
	 */
	type?: "number" | "string" | "object"

	/**
	 * If the type is object, this will sort it by the given key
	 * 
	 * @default if sort_by isn't provided, it will sort by the first key
	 
	*/
	sort_by?: string

	/**
	 * Reverse the sorting
	 *
	 * @default false
	 *
	 *
	 */
	reverse?: boolean
}

export function enhance(list: any[]) {
	const { subscribe, set } = to_writable(list)

	function append<T>(item: T | T[]) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		if (Array.isArray(item)) {
			set([..._list, ...item])
		} else {
			set([..._list, item])
		}
	}

	function clear() {
		set([])
	}

	function count(item?: any) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		if (is_def(item)) {
			let count = 0

			for (let i = 0; i < _list.length; i++) {
				if (_list[i] === item) {
					count++
				}
			}

			return count
		} else {
			return _list.length
		}
	}

	function copy() {
		return enhance(list)
	}

	function index(item: any) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		return _list.indexOf(item)
	}

	function insert<T>(index: number, item: T | T[]) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		if (Array.isArray(item)) {
			set([..._list.slice(0, index), ...item, ..._list.slice(index)])
		} else {
			set([..._list.slice(0, index), item, ..._list.slice(index)])
		}
	}

	function remove<T>(item: T) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		set(_list.filter((i) => i !== item))
	}

	function pop(index?: number) {
		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		const item = _list.at(index ?? -1)

		remove(item)

		return item
	}

	function sort(options: EnhanceSortOptions = {}) {
		const { type = "string", sort_by, reverse = false } = options

		let _list = [...list]

		subscribe((value) => {
			_list = value
		})

		if (type === "string") {
			set(
				_list.sort((a, b) =>
					reverse ? b.localeCompare(a) : a.localeCompare(b)
				)
			)
		} else if (type === "number") {
			set(_list.sort((a, b) => (reverse ? b - a : a - b)))
		} else if (type === "object") {
			let _sort_by = sort_by ?? Object.keys(_list[0])[0]

			if (reverse) {
				_sort_by = `-${_sort_by}`
			}

			set(_sort(_list, _sort_by))
		}
	}

	return {
		subscribe,
		append,
		clear,
		count,
		copy,
		index,
		insert,
		remove,
		pop,
		sort,
	}
}
