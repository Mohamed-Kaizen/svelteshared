import { sleep } from "."

describe("sleep", () => {
	it("should be defined", () => {
		expect(sleep).toBeDefined()
	})

	it("should work", async () => {
		const past = +Date.now()

		await sleep(0.00000001)

		expect(+Date.now()).toBeGreaterThanOrEqual(past)
	})
})
