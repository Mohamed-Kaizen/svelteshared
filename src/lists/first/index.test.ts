import { first } from "."

describe("first", () => {
	it("should be defined", () => {
		expect(first).toBeDefined()
	})

	it("should work", () => {
		const result = first([1, 2, 3])
		expect(result).toEqual(1)
	})

	it("should work with fallback", () => {
		const result = first([], null)
		expect(result).toEqual(null)
	})
})
