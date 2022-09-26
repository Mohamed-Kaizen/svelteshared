import { writable } from "svelte/store"

import { unstore } from "../unstore"
import { is_readable, is_writable } from "../utils"

import type { Writable } from "svelte/store"

import type { MaybeReadable, MaybeWritable } from "../utils"

export function to_writable<T>(
	val: MaybeReadable<T> | MaybeWritable<T>
): Writable<T> {
	if (is_writable(val)) return val

	if (is_readable(val)) return writable(unstore(val))

	return writable(val)
}

// alias
export { to_writable as toWritable }
