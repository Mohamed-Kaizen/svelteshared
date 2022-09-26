export function sleep(
	ms: number,
	throw_on_timeout = false,
	reason = "Timeout"
): Promise<void> {
	return new Promise((resolve, reject) => {
		if (throw_on_timeout) setTimeout(() => reject(reason), ms)
		else setTimeout(resolve, ms)
	})
}
