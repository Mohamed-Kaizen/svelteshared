import { describe, expect, it } from "vitest"

import { compose } from "."

describe("compose", () => {
	it("should be defined", () => {
		expect(compose).toBeDefined()
	})

	it("should work", () => {
		const useZero = (fn: any) => () => fn(0)
		const objectize = (fn: any) => (num: any) => fn({ num })
		const increment =
			(fn: any) =>
			({ num }: any) =>
				fn({ num: num + 1 })
		const returnArg = (arg: any) => (args: any) => args[arg]

		const composed = compose(
			useZero,
			objectize,
			increment,
			increment,
			returnArg("num")
		)

		const decomposed = useZero(
			objectize(increment(increment(returnArg("num"))))
		)
		const expected = decomposed()

		const result = composed()

		expect(result).toBe(expected)
	})
})
