export const shake = <RemovedKeys extends string, T>(
	obj: { [key: string]: any },
	filter: (value: any) => boolean = (x) => x === undefined
): Omit<T, RemovedKeys> => {
	if (!obj) return {} as T
	return Object.keys(obj).reduce((acc, key) => {
		if (filter(obj[key])) {
			return acc
		} else return { ...acc, [key]: obj[key] }
	}, {} as T)
}
