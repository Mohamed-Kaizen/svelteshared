import { create_singleton_promise } from "."

describe("create_singleton_promise", () => {
	it("should be defined", () => {
		expect(create_singleton_promise).toBeDefined()
	})

	it("should create singleton as promise", () => {
		const myFunction = () => {
			const result = create_singleton_promise(() => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve("Hello World")
					}, 1000)
				})
			})
			return {
				result,
			}
		}

		const { result } = myFunction()

		expect(result()).toBeInstanceOf(Promise)
	})
})
