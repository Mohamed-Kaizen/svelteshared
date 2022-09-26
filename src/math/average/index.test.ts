import { average } from "."

describe("average", () => {
	test("should be defined", () => {
		expect(average).toBeDefined()
	})

	test("should work", () => {
		const original = [1, 2, 3]
		const result = average(original)

		expect(result).toBe(2)
	})
})
