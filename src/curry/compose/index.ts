export type Fn<TArgs = any, KReturn = any | void> = (
	...args: TArgs[]
) => KReturn

export function compose(...fn: Fn[]) {
	return fn.reverse().reduce((acc, _fn) => _fn(acc))
}
