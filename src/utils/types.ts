import type { Readable, Writable } from "svelte/store"

/**
 * Maybe it's a Readable, or not.
 *
 * ```ts
 * type Readable = T | Readable<T>
 * ```
 */
export type MaybeReadable<T> = T | Readable<T>

/**
 * Maybe it's a Writable, or not.
 *
 * ```ts
 * type Writable = T | Writable<T>
 * ```
 */
export type MaybeWritable<T> = T | Writable<T>

/**
 * Maybe it's a Store, or not.
 *
 * ```ts
 * type Store = T | Readable<T> | Writable<T>
 * ```
 */
export type MaybeStore<T> = T | Readable<T> | Writable<T>

/**
 * Infers the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

/**
 * Any function
 */
export type Fn = () => void

export type Awaitable<T> = Promise<T> | T

export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

export interface Stoppable {
	/**
	 * A writable indicate whether a stop able instance is executing
	 */
	isPending: Readable<boolean>

	/**
	 * Stop the effect from executing
	 */
	stop: Fn

	/**
	 * Start the effect
	 */
	start: Fn
}

export interface Pauseable {
	/**
	 * A writable indicate whether a pause able instance is active
	 */
	isActive: Readable<boolean>

	/**
	 * Temporary pause the effect from executing
	 */
	pause: Fn

	/**
	 * Resume the effects
	 */
	resume: Fn
}
