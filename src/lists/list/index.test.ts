import { list } from "."

describe("list", () => {
	it("should be defined", () => {
		expect(list).toBeDefined()
	})

	it("should work", () => {
		expect(list(5)).toEqual([0, 1, 2, 3, 4])

		expect(list(5, 10)).toEqual([5, 6, 7, 8, 9])

		expect(list(5, 10, 2)).toEqual([5, 7, 9])

		expect(list(10, 5, -1)).toEqual([10, 9, 8, 7, 6])

		expect(list(10, 5, -2)).toEqual([10, 8, 6])

		expect(list(10, 5, -3)).toEqual([10, 7])

		expect(list(10, 5, -4)).toEqual([10, 6])

		expect(list(10, 5, -5)).toEqual([10])

		expect(list(10, 5, -6)).toEqual([10])

		expect(list(5, 10, -1)).toEqual([])

		expect(list(5, 10, -2)).toEqual([])

		expect(list(5, 10, -3)).toEqual([])

		expect(list(5, 10, -4)).toEqual([])

		expect(list(5, 10, -5)).toEqual([])

		expect(list(5, 10, -6)).toEqual([])
	})
})
