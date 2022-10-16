import { describe, expect, it } from "vitest"

import { average } from "."

describe("average", () => {
	it("should be defined", () => {
		expect(average).toBeDefined()
	})

	it("should work", () => {
		const original = [1, 2, 3]
		const result = average(original)

		expect(result).toBe(2)
	})
})
