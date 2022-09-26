import { type } from "."

describe("type", () => {
	it("should be defined", () => {
		expect(type).toBeDefined()
	})

	it("should work", () => {
		expect(type(1)).toBe("number")
		expect(type("1")).toBe("string")
		expect(type({})).toBe("object")
		expect(type([])).toBe("array")
		expect(type(null)).toBe("null")
		expect(type(undefined)).toBe("undefined")
		expect(type(() => {})).toBe("function")
	})
})
