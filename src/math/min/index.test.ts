import { min } from "."

describe("min", () => {
	test("should be defined", () => {
		expect(min).toBeDefined()
	})

	it("should return the min of two numbers", () => {
		expect(min(1, 2)).toBe(1)
	})
})
