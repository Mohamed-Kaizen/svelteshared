import { describe, expect, it } from "vitest"

import { max } from "."

describe("max", () => {
	it("should be defined", () => {
		expect(max).toBeDefined()
	})

	it("should return the max of two numbers", () => {
		expect(max(1, 2)).toBe(2)
	})
})
