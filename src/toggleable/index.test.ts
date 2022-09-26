import { get, writable } from "svelte/store"

import { toggleable } from "."

describe("toggleable", () => {
	it("should be defined", () => {
		expect(toggleable).toBeDefined()
	})

	it("should work with default", () => {
		const [value, toggle] = toggleable()

		expect(get(value)).toBeDefined()

		expect(toggle).toBeDefined()

		expect(get(value)).toBe(false)

		toggle()

		expect(get(value)).toBe(true)

		toggle()

		expect(get(value)).toBe(false)

		toggle(true)

		expect(get(value)).toBe(true)

		toggle(false)

		expect(get(value)).toBe(false)
	})

	it("should work with initial value", () => {
		const [value, toggle] = toggleable(true)

		expect(get(value)).toBeDefined()

		expect(toggle).toBeDefined()

		expect(get(value)).toBe(true)

		toggle()

		expect(get(value)).toBe(false)

		toggle()

		expect(get(value)).toBe(true)

		toggle(false)

		expect(get(value)).toBe(false)

		toggle(true)

		expect(get(value)).toBe(true)
	})

	it("should work with writable", () => {
		const value = writable(false)

		const toggle = toggleable(value)

		expect(get(value)).toBeDefined()

		expect(toggle).toBeDefined()

		expect(get(value)).toBe(false)

		toggle()

		expect(get(value)).toBe(true)

		toggle()

		expect(get(value)).toBe(false)

		toggle(true)

		expect(get(value)).toBe(true)

		toggle(false)

		expect(get(value)).toBe(false)
	})
})
