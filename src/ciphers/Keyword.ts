import { Solution } from './Solution';
import { Alphabet } from '../state';

export function keyword(
	text: string,
	alphabet: Alphabet,
	key: string
): Solution[] {
	let cipherAlphabet = '';

	for (const character of key.split('')) {
		if (!cipherAlphabet.includes(character)) {
			cipherAlphabet += character;
		}
	}

	for (const character of alphabet.characters.split('')) {
		if (!cipherAlphabet.includes(character)) {
			cipherAlphabet += character;
		}
	}

	let solution = '';
	for (const character of text) {
		if (!cipherAlphabet.includes(character)) {
			solution += character;
			continue;
		}

		const index = cipherAlphabet.indexOf(character);
		solution += alphabet.characters[index];
	}

	return [{ text: solution, cipher: 'Keyword', key: key }];
}
