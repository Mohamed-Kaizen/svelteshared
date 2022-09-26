import { create_filter_wrapper, throttle_filter } from "../utils"

import type { FunctionArgs } from "../utils"

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @param [trailing=false] if true, call fn again after the time is up
 *
 * @param [leading=true] if true, call fn on the leading edge of the ms timeout
 *
 * @return  A new, throttled, function.
 */
export function throttle_fn<T extends FunctionArgs>(
	fn: T,
	ms: number = 200,
	trailing = false,
	leading = true
): T {
	return create_filter_wrapper(throttle_filter(ms, trailing, leading), fn)
}

// alias
export { throttle_fn as throttleFn }
