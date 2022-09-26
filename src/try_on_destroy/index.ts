import { onDestroy } from "svelte"

import { try_get_current_component } from "../try_get_current_component"

import type { Fn } from "../utils"

/**
 * Call onDestroy() if it's inside a component lifecycle, if not, do nothing.
 *
 * @param fn
 */
export function try_on_destroy(fn: Fn) {
	if (try_get_current_component()) {
		onDestroy(fn)
	}
}

// alias
export { try_on_destroy as tryOnDestroy }
