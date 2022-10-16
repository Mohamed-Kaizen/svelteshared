import type { Fn } from "../../utils"

export function partial(fn: Fn, ...args: any[]) {
	return (...rest: any[]) => fn(...args, ...rest)
}
