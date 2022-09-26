import { get } from "svelte/store"
import { last_changed } from "."

describe("last_changed", () => {
	it("should be defined", () => {
		expect(last_changed).toBeDefined()
	})

	it("should work", async () => {
		const { value: last_changedStore, ms } = last_changed("hello")

		expect(get(last_changedStore)).toEqual("hello")

		const past = +Date.now()

		last_changedStore.set("Hello World")

		expect(get(last_changedStore)).toEqual("Hello World")

		const sleep = (ms: number) =>
			new Promise((resolve) => setTimeout(resolve, ms))

		await sleep(0.00000001)

		expect(get(ms) < +Date.now()).toBeTruthy()

		expect(get(ms)).toBeGreaterThanOrEqual(past)
	})
})
