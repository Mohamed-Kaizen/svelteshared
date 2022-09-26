import { unique } from "."

describe("unique", () => {
	it("should be defined", () => {
		expect(unique).toBeDefined()
	})

	it("should work", () => {
		const fish = [
			{
				name: "Marlin",
				weight: 105,
				source: "ocean",
			},
			{
				name: "Salmon",
				weight: 22,
				source: "river",
			},
			{
				name: "Salmon",
				weight: 22,
				source: "river",
			},
		]

		expect(unique(fish, (f) => f.name)).toEqual([
			{
				name: "Marlin",
				weight: 105,
				source: "ocean",
			},
			{
				name: "Salmon",
				weight: 22,
				source: "river",
			},
		])
	})
})
