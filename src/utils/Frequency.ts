import { Alphabet } from '../state';

export function frequency(
	text: string,
	alphabet: Alphabet
): { [key: string]: number } {
	const result: { [key: string]: number } = {};
	let length = 0;

	for (const character of alphabet.characters.split('')) {
		const count = text.split(character).length - 1;
		length += count;
		result[character] = count;
	}

	Object.keys(result).forEach((key) => (result[key] /= length));

	return result;
}
