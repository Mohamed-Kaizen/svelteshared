import { get } from "svelte/store"
import { describe, expect, it } from "vitest"

import { timeout } from "."

describe("timeout", () => {
	it("should be defined", () => {
		expect(timeout).toBeDefined()
	})

	it("should work", () => {
		const ready = timeout(10)
		expect(get(ready)).toEqual(false)

		setTimeout(() => expect(get(ready)).toEqual(true), 10)
	})

	it("should work with controls", () => {
		const { is_pending, ready, stop, start } = timeout(10, {
			controls: true,
		})

		expect(get(ready)).toEqual(false)

		stop()

		expect(get(ready)).toEqual(true)

		expect(get(is_pending)).toEqual(false)

		start()

		expect(get(ready)).toEqual(false)

		expect(get(is_pending)).toEqual(true)
	})

	it("should work with controls and immediate", () => {
		const { is_pending, ready, stop, start } = timeout(10, {
			controls: true,
			immediate: true,
		})

		expect(get(ready)).toEqual(false)

		expect(get(is_pending)).toEqual(true)

		stop()

		expect(get(ready)).toEqual(true)

		expect(get(is_pending)).toEqual(false)

		start()

		expect(get(ready)).toEqual(false)

		expect(get(is_pending)).toEqual(true)
	})
})
