import { last } from "."

describe("last", () => {
	it("should be defined", () => {
		expect(last).toBeDefined()
	})

	it("should work", () => {
		const result = last([1, 2, 3])
		expect(result).toEqual(3)
	})

	it("should work with fallback", () => {
		const result = last([], null)
		expect(result).toEqual(null)
	})
})
