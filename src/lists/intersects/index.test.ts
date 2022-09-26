import { intersects } from "."

describe("intersects", () => {
	it("should be defined", () => {
		expect(intersects).toBeDefined()
	})

	it("should work", () => {
		const oceanFish = ["tuna", "tarpon"]
		const lakeFish = ["bass", "trout"]

		const [hasIntersections, intersection] = intersects(oceanFish, lakeFish)

		const brackishFish = ["tarpon", "snook"]

		const [hasIntersections2, intersection2] = intersects(
			oceanFish,
			brackishFish
		)

		expect(hasIntersections).toEqual(false)

		expect(intersection).toEqual([])

		expect(hasIntersections2).toEqual(true)

		expect(intersection2).toEqual(["tarpon"])
	})
})
