export function* range(
	start: number,
	stop?: number,
	step: number = 1
): Generator<number> {
	if (typeof stop === "undefined") {
		stop = start
		start = 0
	}

	if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
		return []
	}

	for (let i = start; i <= stop; i += step) {
		yield i
		if (i + step > stop) break
	}
}
