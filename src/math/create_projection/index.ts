import { create_generic_pojection } from "../create_generic_pojection"

import type { ProjectorFunction, Projection } from "../create_generic_pojection"

const default_numeric_projector = (
	input: number,
	from: readonly [number, number],
	to: readonly [number, number]
) => {
	return ((input - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0]
}

export function create_projection(
	from_domain: readonly [number, number],
	to_domain: readonly [number, number],
	projector: ProjectorFunction<number, number> = default_numeric_projector
): Projection<number, number> {
	return create_generic_pojection(from_domain, to_domain, projector)
}

// alias
export { default_numeric_projector as createProjection }
