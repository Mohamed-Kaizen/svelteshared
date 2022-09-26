export function list(start: number, stop?: number, step: number = 1): number[] {
	if (typeof stop === "undefined") {
		stop = start
		start = 0
	}

	if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
		return []
	}

	const result = []
	for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
		result.push(i)
	}

	return result
}
