export function translate(
	source: string,
	key: string[],
	target: string[]
): string {
	let result = '';

	for (const character of source.split('')) {
		if (!key.includes(character)) {
			result += character;
		}

		const index = key.indexOf(character);
		result += target[index];
	}

	return result;
}
