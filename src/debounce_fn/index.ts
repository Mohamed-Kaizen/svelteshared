import { create_filter_wrapper, debounce_filter } from "../utils"

import type { DebounceFilterOptions, FunctionArgs } from "../utils"

/**
 * Debounce execution of a function.
 *
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  opts        options
 *
 * @return A new, debounce, function.
 */
export function debounce_fn<T extends FunctionArgs>(
	fn: T,
	ms: number = 200,
	options: DebounceFilterOptions = {}
): T {
	return create_filter_wrapper(debounce_filter(ms, options), fn)
}

// alias
export { debounce_fn as debounceFn }
