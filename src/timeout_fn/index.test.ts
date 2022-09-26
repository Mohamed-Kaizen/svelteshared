import { writable } from "svelte/store"

import { timeout_fn } from "."
import { sleep } from "../sleep"

describe("timeout_fn", () => {
	it("should be defined", () => {
		expect(timeout_fn).toBeDefined()
	})

	it("should work", async () => {
		const callback = vitest.fn()

		const interval = writable(0)

		const { start } = timeout_fn(callback, interval)

		start()

		await sleep(1)

		expect(callback).toBeCalled()

		callback.mockReset()

		interval.set(50)

		start()

		await sleep(1)

		expect(callback).not.toBeCalled()

		await sleep(100)

		expect(callback).toBeCalled()
	})
})
