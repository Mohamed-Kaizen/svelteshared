import { describe, expect, it } from "vitest"

import { map_values } from "."

describe("map_values", () => {
	it("should be defined", () => {
		expect(map_values).toBeDefined()
	})

	it("should work", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}
		const result = map_values(obj, (value) => value + 1)
		expect(result).toEqual({
			a: 2,
			b: 3,
			c: 4,
		})
	})
})
