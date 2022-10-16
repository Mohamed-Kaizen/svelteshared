import { get } from "svelte/store"
import { describe, expect, it } from "vitest"

import { enhance } from "."

describe("enhance", () => {
	it("should be defined", () => {
		expect(enhance).toBeDefined()
	})

	it("should append", () => {
		const list = enhance([1, 2, 3])
		list.append(4)
		expect(get(list)).toEqual([1, 2, 3, 4])
	})

	it("should append array", () => {
		const list = enhance([1, 2, 3])
		list.append([4, 5])
		expect(get(list)).toEqual([1, 2, 3, 4, 5])
	})

	it("should clear", () => {
		const list = enhance([1, 2, 3])
		list.clear()
		expect(get(list)).toEqual([])
	})

	it("should count", () => {
		const list = enhance([1, 2, 3, 1, 2, 3])
		expect(list.count(1)).toEqual(2)
	})

	it("should count with default", () => {
		const list = enhance([1, 2, 3, 1, 2, 3])
		expect(list.count()).toEqual(6)
	})

	it("should copy", () => {
		const list = enhance([1, 2, 3])

		const copy = list.copy()

		expect(get(copy)).toEqual([1, 2, 3])

		list.clear()

		expect(get(list)).toEqual([])

		expect(get(copy)).toEqual([1, 2, 3])
	})

	it("should index", () => {
		const list = enhance([1, 2, 3])
		expect(list.index(2)).toEqual(1)
	})

	it("should insert", () => {
		const list = enhance([1, 2, 3])
		list.insert(1, 4)
		expect(get(list)).toEqual([1, 4, 2, 3])
	})

	it("should insert array", () => {
		const list = enhance([1, 2, 3])
		list.insert(1, [4, 5])
		expect(get(list)).toEqual([1, 4, 5, 2, 3])
	})

	it("should remove", () => {
		const list = enhance([1, 2, 3, 9, 5])
		list.remove(9)
		expect(get(list)).toEqual([1, 2, 3, 5])
	})

	it("should pop", () => {
		const list = enhance([1, "a", 3])
		expect(list.pop(1)).toEqual("a")
		expect(get(list)).toEqual([1, 3])
	})

	it("should pop negative", () => {
		const list = enhance([1, "a", 3])
		expect(list.pop(-1)).toEqual(3)
		expect(get(list)).toEqual([1, "a"])
	})

	it("should pop undefined", () => {
		const list = enhance([1, "a", 3])
		expect(list.pop()).toEqual(3)
		expect(get(list)).toEqual([1, "a"])
	})

	it("should sort", () => {
		const list = enhance([3, 2, 1])
		list.sort({ type: "number" })
		expect(get(list)).toEqual([1, 2, 3])
	})

	it("should sort reverse", () => {
		const list = enhance([1, 2, 3])
		list.sort({ type: "number", reverse: true })
		expect(get(list)).toEqual([3, 2, 1])
	})

	it("should sort strings", () => {
		const list = enhance(["c", "b", "a"])
		list.sort()
		expect(get(list)).toEqual(["a", "b", "c"])
	})

	it("should sort strings reverse", () => {
		const list = enhance(["a", "b", "c"])
		list.sort({ reverse: true })
		expect(get(list)).toEqual(["c", "b", "a"])
	})

	it("should sort objects", () => {
		const users_fullname = [
			{ name: "john", surname: "doe" },
			{ name: "jane", surname: "noah" },
			{ name: "erza", surname: "scarlet" },
		]

		const list = enhance(users_fullname)

		list.sort({ type: "object", sort_by: "surname" })

		expect(get(list)).toEqual([
			{ name: "john", surname: "doe" },
			{ name: "jane", surname: "noah" },
			{ name: "erza", surname: "scarlet" },
		])

		list.sort({ type: "object", sort_by: "name" })

		expect(get(list)).toEqual([
			{ name: "erza", surname: "scarlet" },
			{ name: "jane", surname: "noah" },
			{ name: "john", surname: "doe" },
		])

		list.sort({ type: "object", sort_by: "surname", reverse: true })

		expect(get(list)).toEqual([
			{ name: "erza", surname: "scarlet" },
			{ name: "jane", surname: "noah" },
			{ name: "john", surname: "doe" },
		])

		list.sort({ type: "object", sort_by: "name", reverse: true })

		expect(get(list)).toEqual([
			{ name: "john", surname: "doe" },
			{ name: "jane", surname: "noah" },
			{ name: "erza", surname: "scarlet" },
		])
	})
})
