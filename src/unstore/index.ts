import { get } from "svelte/store"

import { is_readable } from "../utils"

import type { MaybeReadable, MaybeWritable } from "../utils"

export function unstore<T>(val: MaybeReadable<T> | MaybeWritable<T>): T {
	return is_readable(val) ? get(val) : val
}
