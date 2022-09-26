export const sift = <T>(list: readonly T[]) => {
	return list?.filter((x) => !!x) ?? []
}
