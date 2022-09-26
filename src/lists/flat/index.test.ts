import { flat } from "."

describe("flat", () => {
	it("should be defined", () => {
		expect(flat).toBeDefined()
	})

	it("should work", () => {
		expect(
			flat([
				[1, 2],
				[3, 4],
			])
		).toEqual([1, 2, 3, 4])
	})

	it("should work with empty arrays", () => {
		expect(flat([[], []])).toEqual([])
	})
})
