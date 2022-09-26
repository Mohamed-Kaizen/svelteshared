import { sift } from "."

describe("sift", () => {
	it("should be defined", () => {
		expect(sift).toBeDefined()
	})

	it("should work", () => {
		const fish = ["salmon", null, false, NaN, "sockeye", "bass"]

		expect(sift(fish)).toEqual(["salmon", "sockeye", "bass"])
	})
})
