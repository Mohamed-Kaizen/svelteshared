import { get } from "svelte/store"
import { counter } from "."

describe("counter", () => {
	it("should be defined", () => {
		expect(counter).toBeDefined()
	})

	it("should be update counter", () => {
		const { count, inc, dec, reset, set } = counter(0)

		expect(get(count)).toEqual(0)

		inc()

		inc()

		expect(get(count)).toEqual(2)

		dec()

		expect(get(count)).toEqual(1)

		reset()

		expect(get(count)).toEqual(0)

		set(10)

		expect(get(count)).toEqual(10)
	})

	it("should be update limited counter", () => {
		const { count, inc, dec } = counter(1, { min: -2, max: 15 })

		expect(get(count)).toEqual(1)

		inc(20)

		expect(get(count)).toEqual(15)

		dec(2)

		expect(get(count)).toEqual(13)

		dec()

		expect(get(count)).toEqual(12)

		dec(20)

		expect(get(count)).toEqual(-2)
	})
})
