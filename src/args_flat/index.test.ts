import { args_flat, MaybeArgs } from "."

describe("args_flat", () => {
	it("should be defined", () => {
		expect(args_flat).toBeDefined()
	})

	it("should Work with numbers", () => {
		function test(...args: MaybeArgs<number>) {
			const result = args_flat(args)
			expect(result).toEqual([1, 2, 3])
		}

		test(1, 2, 3)
	})

	it("should Work with strings", () => {
		function test(...args: MaybeArgs<string>) {
			const result = args_flat(args)
			expect(result).toEqual(["svelte", "is", "so", "cool"])
		}

		test("svelte", "is", "so", "cool")
	})
})
