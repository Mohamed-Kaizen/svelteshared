import { len } from "."

describe("len", () => {
	it("should be defined", () => {
		expect(len).toBeDefined()
	})

	it("should work", async () => {
		expect(len("")).toBe(0)
		expect(len("a")).toBe(1)
		expect(len("ab")).toBe(2)
		expect(len("abc")).toBe(3)

		expect(len([])).toBe(0)
		expect(len([1])).toBe(1)
		expect(len([1, 2])).toBe(2)
		expect(len([1, 2, 3])).toBe(3)

		expect(len({})).toBe(0)
		expect(len({ a: 1 })).toBe(1)
		expect(len({ a: 1, b: 2 })).toBe(2)
		expect(len({ a: 1, b: 2, c: 3 })).toBe(3)

		expect(len(new Set())).toBe(0)
		expect(len(new Set([1]))).toBe(1)
		expect(len(new Set([1, 2]))).toBe(2)
		expect(len(new Set([1, 2, 3]))).toBe(3)
	})
})