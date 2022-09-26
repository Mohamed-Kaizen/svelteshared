import { writable } from "svelte/store"

export function watchable<T>(target: T, fn: (o: T, n: T) => void) {
	const { subscribe, update } = writable(target)
	return {
		subscribe,
		set: (value: T) => {
			update((oldValue) => {
				fn(oldValue, value)
				return value
			})
		},
	}
}
