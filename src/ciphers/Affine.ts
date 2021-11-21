import { Alphabet } from '../state';
import { Solution } from './Solution';

export function affine(
	text: string,
	alphabet: Alphabet,
	keyA?: number,
	keyB?: number
): Solution[] {
	const aStart = keyA ? keyA % alphabet.characters.length : 1;
	const aEnd = keyA
		? (keyA % alphabet.characters.length) + 1
		: alphabet.characters.length;

	const bStart = keyB ? keyB % alphabet.characters.length : 0;
	const bEnd = keyB
		? (keyB % alphabet.characters.length) + 1
		: alphabet.characters.length;

	const result: Solution[] = [];
	for (let a = aStart; a < aEnd; ++a) {
		for (let b = bStart; b < bEnd; ++b) {
			if (!isCoprime(a, b) || !isCoprime(a, alphabet.characters.length)) {
				continue;
			}

			let solution = '';
			for (const character of text.split('')) {
				if (!alphabet.characters.includes(character)) {
					solution += character;
					continue;
				}

				const pos = invers(a, alphabet.characters.length);
				if (pos) {
					let position =
						(pos * (alphabet.characters.indexOf(character) - b)) %
						alphabet.characters.length;

					if (position < 0) {
						position += alphabet.characters.length;
					}

					solution += alphabet.characters[position];
				}
			}

			result.push({ text: solution, cipher: 'Affine', key: `${a}-${b}` });
		}
	}

	return result;
}

function invers(a: number, alphabetLength: number): number | undefined {
	for (let i = 0; i < alphabetLength; ++i) {
		if ((a * i) % alphabetLength === 1) {
			return i;
		}
	}
}

function isCoprime(a: number, b: number): boolean {
	const end = a > b ? a : b;

	for (let i = 2; i < end; ++i) {
		if (a % i === 0 && b % i === 0) {
			return false;
		}
	}

	return true;
}
