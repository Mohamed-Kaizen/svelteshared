import { describe, expect, it } from "vitest"

import { min } from "."

describe("min", () => {
	it("should be defined", () => {
		expect(min).toBeDefined()
	})

	it("should return the min of two numbers", () => {
		expect(min(1, 2)).toBe(1)
	})
})
