import { create_projection } from "../create_projection"

import type { ProjectorFunction } from "../create_generic_pojection"

/**
 * Numeric projection from one domain to another.
 *
 */
export function projection(
	input: number,
	from_domain: readonly [number, number],
	to_domain: readonly [number, number],
	projector?: ProjectorFunction<number, number>
) {
	return create_projection(from_domain, to_domain, projector)(input)
}
