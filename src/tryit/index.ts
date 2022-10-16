import { make_destructurable } from "../make_destructurable"

import type { Fn } from "../utils"

export function tryit(fn: Fn) {
	return async (...args: any) => {
		try {
			const destructurable = make_destructurable(
				{ error: null, result: await fn(...args) } as const,
				[null, await fn(...args)] as const
			)
			return destructurable
		} catch (err) {
			const destructurable = make_destructurable(
				{ error: err, result: null } as const,
				[err, null] as const
			)
			return destructurable
		}
	}
}
