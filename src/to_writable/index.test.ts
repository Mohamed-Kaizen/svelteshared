import { get, readable, writable } from "svelte/store"

import { to_writable } from "."
import { is_writable } from "../utils"

describe("to_writable", () => {
	it("should be defined", () => {
		expect(to_writable).toBeDefined()
	})

	it("default", () => {
		const v = "123.345"

		const w = to_writable(v)

		expect(is_writable(w)).toBeTruthy()
	})

	it("writable", () => {
		const wv = writable("123.345")

		const w = to_writable(wv)

		expect(is_writable(w)).toBeTruthy()
	})

	it("readable", () => {
		const r = readable("123.345")

		const w = to_writable(r)

		expect(is_writable(w)).toBeTruthy()
	})

	it("value", () => {
		const v = "123.345"

		const w = to_writable(v)

		expect(get(w)).toBe("123.345")
	})
})
