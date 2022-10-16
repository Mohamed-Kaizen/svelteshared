export function template(
	str: string,
	data: Record<string, any>,
	regex = /\{\{(.+?)\}\}/g
) {
	return Array.from(str.matchAll(regex)).reduce((acc, match) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [_, key] = match
		return acc.replace(match[0], data[key])
	}, str)
}
