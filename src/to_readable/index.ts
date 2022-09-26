import { readable } from "svelte/store"

import { is_readable, is_writable } from "../utils"

import type { Readable } from "svelte/store"

import type { MaybeReadable, MaybeWritable } from "../utils"

export function to_readable<T>(
	val: MaybeReadable<T> | MaybeWritable<T>
): Readable<T> {
	if (is_writable(val)) {
		return {
			subscribe: val.subscribe,
		}
	}

	return is_readable(val) ? val : readable(val)
}

// alias
export { to_readable as toReadable }
