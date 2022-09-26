import { to_readable } from "../to_readable"
import { to_writable } from "../to_writable"
import { unstore } from "../unstore"
import { is_writable, is_boolean, is_def } from "../utils"

import type { Writable, Readable } from "svelte/store"

import type { MaybeWritable } from "../utils"

/**
 * A boolean store with a toggler
 *
 * @param [initial_value=false]
 */
export function toggleable(
	value: Writable<boolean>
): (value?: boolean) => boolean
export function toggleable(
	initial_value?: MaybeWritable<boolean>
): [Readable<boolean>, (value?: boolean) => boolean]
export function toggleable(initial_value: MaybeWritable<boolean> = false) {
	if (is_writable(initial_value)) {
		return (value?: boolean) => {
			if (is_def(value)) {
				initial_value.set(
					is_boolean(value) ? value : !unstore(initial_value)
				)
			} else initial_value.set(!unstore(initial_value))
		}
	} else {
		const store = to_writable(initial_value)

		const toggle = (value?: boolean) => {
			if (is_def(value)) {
				store.set(is_boolean(value) ? value : !unstore(store))
			} else store.set(!unstore(store))
		}

		return [to_readable(store), toggle] as const
	}
}
