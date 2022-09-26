import { select } from "."

describe("select", () => {
	it("should be defined", () => {
		expect(select).toBeDefined()
	})

	it("should work", () => {
		const fish = [
			{
				name: "Marlin",
				weight: 105,
				source: "ocean",
			},
			{
				name: "Bass",
				weight: 8,
				source: "lake",
			},
			{
				name: "Trout",
				weight: 13,
				source: "lake",
			},
		]

		expect(
			select(
				fish,
				(f) => f.weight,
				(f) => f.source === "lake"
			)
		).toEqual([8, 13])
	})
})
