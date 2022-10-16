import { describe, expect, it } from "vitest"

import { date_format } from "."

describe("date_format", () => {
	it("should be defined", () => {
		expect(date_format).toBeDefined()
	})
	it("should work with default", () => {
		expect(date_format(new Date("2022-01-01 10:24:00"))).toBe("10:24:00")
	})
	it("should work with time string ", () => {
		expect(date_format("2022-01-01 20:24:24", "YYYY—MM-DD HH:mm:ss")).toBe(
			"2022—01-01 20:24:24"
		)
	})
	it("should work with YYYY-MM-DD", () => {
		expect(date_format(new Date("2022-01-01 10:24:00"), "YYYY-MM-DD")).toBe(
			"2022-01-01"
		)
	})
	it("should work with YY-M-D", () => {
		expect(date_format(new Date("2022-01-01 10:24:00"), "YY-M-D")).toBe(
			"22-1-1"
		)
	})
	it("should work with h:m:s", () => {
		expect(date_format(new Date("2022-01-01 08:05:00"), "h:m:s")).toBe(
			"8:5:0"
		)
	})
	it("should work with hh:mm:ss", () => {
		expect(date_format(new Date("2022-01-01 15:05:05"), "hh:mm:ss")).toBe(
			"03:05:05"
		)
	})
	it("should work with HH:mm:ss", () => {
		expect(date_format(new Date("2022-01-01 15:05:05"), "HH:mm:ss")).toBe(
			"15:05:05"
		)
	})
	it("should work with HH:mm:ss:SSS", () => {
		expect(
			date_format(new Date("2022-01-01 15:05:05:999"), "HH:mm:ss:SSS")
		).toBe("15:05:05:999")
	})
	it("should work with HH:mm:ss d", () => {
		expect(date_format(new Date("2022-01-01 15:05:05"), "HH:mm:ss d")).toBe(
			"15:05:05 6"
		)
	})
	it("should work with YYYY/MM/DD dd", () => {
		expect(
			date_format(new Date("2022-01-01 15:05:05"), "YYYY/MM/DD dd", {
				locales: "en-US",
			})
		).toBe("2022/01/01 S")
	})
	it("should work with YYYY/MM/DD ddd", () => {
		expect(
			date_format(new Date("2022-01-01 15:05:05"), "YYYY/MM/DD ddd", {
				locales: "en-US",
			})
		).toBe("2022/01/01 Sat")
	})
	it("should work with YYYY/MM/DD dddd", () => {
		expect(
			date_format(new Date("2022-01-01 15:05:05"), "YYYY/MM/DD dddd", {
				locales: "en-US",
			})
		).toBe("2022/01/01 Saturday")
	})
})
