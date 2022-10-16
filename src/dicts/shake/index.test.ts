import { describe, expect, it } from "vitest"

import { shake } from "."

describe("shake", () => {
	it("should be defined", () => {
		expect(shake).toBeDefined()
	})

	it("should work", () => {
		expect(shake({ a: 1, b: 2, c: 3 }, (x) => x === undefined)).toEqual({
			a: 1,
			b: 2,
			c: 3,
		})

		expect(
			shake({ a: 1, b: 2, c: undefined }, (x) => x === undefined)
		).toEqual({
			a: 1,
			b: 2,
		})
	})
})
