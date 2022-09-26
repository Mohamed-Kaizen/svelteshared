import { make_destructurable } from "../make_destructurable"
import { to_readable } from "../to_readable"
import { to_writable } from "../to_writable"
import { watchable } from "../watchable"

export interface LastChangedOptions {
	default?: number
}

export function last_changed<T>(target: T, options?: LastChangedOptions) {
	const ms = to_writable(options?.default ?? +Date.now())

	const value = watchable(target, () => ms.set(+Date.now()))

	return make_destructurable(
		{ value, ms: to_readable(ms) } as const,
		[value, to_readable(ms)] as const
	)
}

// alias
export { last_changed as lastChanged }
