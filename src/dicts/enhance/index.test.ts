import { get } from "svelte/store"
import { describe, expect, it } from "vitest"

import { enhance } from "."

describe("enhance", () => {
	it("should be defined", () => {
		expect(enhance).toBeDefined()
	})

	it("should append", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}
		const dict = enhance(obj)

		dict.append("d", 4)

		expect(dict.get("d")).toBe(4)
	})

	it("should clear", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}
		const dict = enhance(obj)

		dict.clear()

		expect(get(dict)).toEqual({})
	})

	it("should contains", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}
		const dict = enhance(obj)

		expect(dict.contains("a")).toBe(true)
		expect(dict.contains("d")).toBe(false)
	})

	it("should copy", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}
		const dict = enhance(obj)
		const copy = dict.copy()

		expect(get(copy)).toEqual(obj)
	})

	it("should fromkeys", () => {
		const obj = {}
		const dict = enhance(obj)

		const new_dict = dict.fromkeys(["k", "bj", "gc"], 1)

		expect(get(new_dict)).toEqual({
			k: 1,
			bj: 1,
			gc: 1,
		})
	})

	it("should get", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.get("a")).toBe(1)
	})

	it("should invert", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.invert()).toEqual({
			1: "a",
			2: "b",
			3: "c",
		})
	})

	it("should get items", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.items()).toEqual([
			["a", 1],
			["b", 2],
			["c", 3],
		])

		expect(dict.items({ flat: true })).toEqual(["a", 1, "b", 2, "c", 3])
	})

	it("should get keys", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.keys()).toEqual(["a", "b", "c"])
	})

	it("should pop an item", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.pop("a")).toBe(1)
		expect(get(dict)).toEqual({
			b: 2,
			c: 3,
		})
	})

	it("should get the last time", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.popitem()).toEqual(["c", 3])
		expect(get(dict)).toEqual({
			a: 1,
			b: 2,
		})
	})

	it("should get values", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		const dict = enhance(obj)

		expect(dict.values()).toEqual([1, 2, 3])
	})
})
