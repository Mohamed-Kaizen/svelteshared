import { map } from "."

describe("map", () => {
	it("should be defined", () => {
		expect(map).toBeDefined()
	})

	it("should work", () => {
		const ra = {
			name: "Ra",
			power: "sun",
			rank: 100,
			culture: "egypt",
		}

		expect(
			map(ra, (key, value) => [key.toUpperCase(), `${value}`])
		).toEqual({
			NAME: "Ra",
			POWER: "sun",
			RANK: "100",
			CULTURE: "egypt",
		})
	})
})
