import { describe, expect, it } from "vitest"

import { sum } from "."

describe("sum", () => {
	it("should be defined", () => {
		expect(sum).toBeDefined()
	})

	it("should work", () => {
		expect(sum(1, 2)).toBe(3)
	})
})
