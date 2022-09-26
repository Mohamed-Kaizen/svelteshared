import { cluster } from "."

describe("cluster", () => {
	it("should be defined", () => {
		expect(cluster).toBeDefined()
	})

	it("should work", () => {
		const result = cluster([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { size: 2 })
		expect(result).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
			[7, 8],
			[9, 10],
		])
	})

	it("should work with a size of 3", () => {
		const result = cluster([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { size: 3 })
		expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
	})

	it("should work with list of string with a size of 1", () => {
		const result = cluster(
			["Ra", "Zeus", "Loki", "Vishnu", "Icarus", "Osiris", "Thor"],
			{ size: 1 }
		)

		expect(result).toEqual([
			["Ra"],
			["Zeus"],
			["Loki"],
			["Vishnu"],
			["Icarus"],
			["Osiris"],
			["Thor"],
		])
	})
})
