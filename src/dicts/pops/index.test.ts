import { pops } from "."

describe("pops", () => {
	it("should be defined", () => {
		expect(pops).toBeDefined()
	})

	it("should work", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		}

		expect(pops(obj, ["a", "b"])).toEqual({
			c: 3,
		})
	})
})
