import { merge } from "."

describe("group", () => {
	it("should be defined", () => {
		expect(merge).toBeDefined()
	})

	it("should work", () => {
		const gods = [
			{
				name: "Zeus",
				power: 92,
			},
			{
				name: "Ra",
				power: 97,
			},
		]

		const newGods = [
			{
				name: "Zeus",
				power: 100,
			},
		]

		expect(merge(gods, newGods, (g) => g.name)).toEqual([
			{
				name: "Zeus",
				power: 100,
			},
			{
				name: "Ra",
				power: 97,
			},
		])
	})
})
