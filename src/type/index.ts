export function type<T>(item: T): string {
	return Object.prototype.toString.call(item).slice(8, -1).toLowerCase()
}
