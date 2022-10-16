import { describe, expect, it } from "vitest"

import { projection } from "."

describe("projection", () => {
	it("should be defined", () => {
		expect(projection).toBeDefined()
	})

	it("projects correctly", () => {
		expect(projection(5, [0, 10], [0, 100])).toBe(50)
		expect(projection(3, [0, 10], [0, 100])).toBe(30)
		expect(projection(4, [0, 44], [0, 132])).toBe(12)
	})
})
