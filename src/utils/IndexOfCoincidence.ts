import { Alphabet } from '../state';

export function calculateIndexOfCoincidence(
	text: string,
	alphabet: Alphabet
): number {
	let incidence = 0;
	let length = 0;

	for (const character of alphabet.characters.split('')) {
		const count = text.split(character).length - 1;
		length += count;
		incidence += count * (count - 1);
	}

	return length > 0 ? incidence / (length * (length - 1)) : 0;
}
