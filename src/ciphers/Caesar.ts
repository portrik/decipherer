import { Solution } from './Solution';
import { translate } from '../utils';
import { Alphabet } from '../state';

export function caesar(text: string, alphabet: Alphabet, key?: number) {
	const start = key ? key : 1;
	const end = key
		? (key % alphabet.characters.length) + 1
		: alphabet.characters.length;

	const result: Solution[] = [];

	for (let i = start; i < end; ++i) {
		const characters = alphabet.characters.split('');
		for (let j = 0; j < i; ++j) {
			characters.push(characters.shift() as string);
		}

		result.push({
			cipher: 'Caesar',
			key: `${i}`,
			text: translate(text, characters, alphabet.characters.split('')),
		});
	}

	return result;
}
