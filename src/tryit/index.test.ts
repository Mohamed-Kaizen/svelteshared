/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, it } from "vitest"

import { tryit } from "."

describe("tryit", () => {
	it("should be defined", () => {
		expect(tryit).toBeDefined()
	})

	it("should work", async () => {
		const tryit_fn = tryit(async (a: number, b: number) => a + b)

		const [error, result] = await tryit_fn(1, 2)

		expect(error).toBe(null)
		expect(result).toBe(3)
	})

	it("should work with errors", async () => {
		const tryit_fn = tryit(async (a: number, b: number) => {
			throw new Error("test")
		})

		const [error, result] = await tryit_fn(1, 2)

		expect(error.message).toBe("test")

		expect(result).toBe(null)
	})

	it("should work with destructuring", async () => {
		const tryit_fn = tryit(async (a: number, b: number) => a + b)

		const { error, result } = await tryit_fn(1, 2)

		expect(error).toBe(null)
		expect(result).toBe(3)
	})

	it("should work with destructuring and errors", async () => {
		const { error, result } = await tryit(async (a: number, b: number) => {
			throw new Error("test")
		})(1, 2)

		expect(error.message).toBe("test")

		expect(result).toBe(null)
	})
})
