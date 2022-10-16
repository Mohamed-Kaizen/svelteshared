import { describe, expect, it } from "vitest"

import { to_string } from "."

describe("to_string", () => {
	it("should be defined", () => {
		expect(to_string).toBeDefined()
	})

	it("default", () => {
		const value = 123.345

		const str = to_string(value)

		expect(str).toBe("123.345")
	})
})
