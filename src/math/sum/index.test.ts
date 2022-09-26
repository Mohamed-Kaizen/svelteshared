import { sum } from "."

describe("sum", () => {
	test("should be defined", () => {
		expect(sum).toBeDefined()
	})

	it("should work", () => {
		expect(sum(1, 2)).toBe(3)
	})
})
