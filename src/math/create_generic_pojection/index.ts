export type ProjectorFunction<F, T> = (
	input: F,
	from: readonly [F, F],
	to: readonly [T, T]
) => T

export type Projection<F, T> = (input: F) => T

export function create_generic_pojection<F = number, T = number>(
	from_domain: readonly [F, F],
	to_domain: readonly [T, T],
	projector: ProjectorFunction<F, T>
): Projection<F, T> {
	return (input: F) => {
		return projector(input, from_domain, to_domain)
	}
}

// alias
export { create_generic_pojection as createGenericProjection }
