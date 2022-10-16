import type { Fn } from "../../utils"

export function chain(...funcs: Fn[]) {
	return (...args: any[]) => {
		return funcs.slice(1).reduce((acc, fn) => fn(acc), funcs[0](...args))
	}
}
