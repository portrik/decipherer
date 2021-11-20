import { Alphabet } from './Alphabet';

export function saveAlphabets(alphabets: Alphabet[]): void {
	localStorage.setItem('alphabets', JSON.stringify(alphabets));
}

export function loadAlphabets(): Alphabet[] {
	const rawData = localStorage.getItem('alphabets');

	if (!rawData) {
		return [];
	}

	const alphabets: Alphabet[] = [];
	const arr: {
		name: string;
		characters: string;
		indexOfCoincidence: number;
		characterCoincidence: { [key: string]: number };
	}[] = JSON.parse(rawData);
	for (const alph of arr) {
		alphabets.push(
			new Alphabet(
				alph.name,
				alph.characters,
				alph.indexOfCoincidence,
				alph.characterCoincidence
			)
		);
	}

	return alphabets;
}
