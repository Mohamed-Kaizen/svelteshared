import { type } from "../type"

import type { Readable, Writable } from "svelte/store"

export const is_client = typeof window !== "undefined"

export const is_def = <T = any>(val?: T): val is T => type(val) !== "undefined"

export const assert = (condition: boolean, ...infos: any[]) => {
	if (!condition) console.warn(...infos)
}

export const is_set = (val: any): boolean => type(val) === "set"

export const is_boolean = (val: any): boolean => type(val) === "boolean"

export const is_function = (val: any): boolean => type(val) === "function"

export const is_number = (val: any): boolean => type(val) === "number"

export const is_string = (val: unknown): boolean => type(val) === "string"

export const is_object = (val: any): boolean => type(val) === "object"

export const is_array = (val: any): boolean => type(val) === "array"

export const is_date = (val: any): boolean => type(val) === "date"

export const is_symbol = (val: any): boolean => type(val) === "symbol"

export const is_window = (val: any): boolean =>
	typeof window !== "undefined" && type(val) === "window"

export const is_readable = <T>(store: any): store is Readable<T> => {
	return store && is_function(store.subscribe)
}

export const is_writable = <T>(store: any): store is Writable<T> => {
	return (
		store &&
		["subscribe", "set", "update"].every((n) => is_function(store[n]))
	)
}

export const is_empty = (value: any) => {
	if (value === true || value === false) return true
	if (value === null || value === undefined) return true
	if (is_number(value)) return parseInt(value) === 0
	if (is_date(value)) return isNaN(value)
	if (is_function(value)) return false
	if (is_symbol(value)) return false
	const length = (value as any).length
	if (is_number(length)) return length === 0
	const size = (value as any).size
	if (is_number(size)) return size === 0
	const keys = Object.keys(value).length
	return keys === 0
}

export const is_equal = <TType>(x: TType, y: TType): boolean => {
	if (Object.is(x, y)) return true
	if (x instanceof Date && y instanceof Date) {
		return x.getTime() === y.getTime()
	}
	if (x instanceof RegExp && y instanceof RegExp) {
		return x.toString() === y.toString()
	}
	if (
		typeof x !== "object" ||
		x === null ||
		typeof y !== "object" ||
		y === null
	) {
		return false
	}
	const keysX = Reflect.ownKeys(x as unknown as object)
	const keysY = Reflect.ownKeys(y as unknown as object)
	if (keysX.length !== keysY.length) return false
	for (let i = 0; i < keysX.length; i++) {
		if (!Reflect.has(y as unknown as object, keysX[i])) return false
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//   @ts-ignore
		if (!is_equal(x[keysX[i]], y[keysX[i]])) return false
	}
	return true
}

export const now = () => Date.now()

export const timestamp = () => +Date.now()

export const noop = () => {}

export const is_IOS =
	/* #__PURE__ */ is_client &&
	window?.navigator?.userAgent &&
	/iP(ad|hone|od)/.test(window.navigator.userAgent)
