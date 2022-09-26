export type MaybeArgs<T> = T[] | T[][]

export function args_flat<T>(args: MaybeArgs<T>): T[] {
	return args.flatMap((i: any) => {
		const v = i
		if (Array.isArray(v)) return v.map((i) => i)
		return [v]
	})
}

// alias
export { args_flat as argsFlat }
