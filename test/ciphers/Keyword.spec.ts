import { keyword } from '../../src/ciphers/Keyword';
import { English } from '../../src/state';

describe('Cipher Keyword', () => {
	test.each([
		{
			text: 'QDFPFPTQAPQLBHAYWLOR',
			key: 'TESTER',
			solutions: [
				{ text: 'THISISATESTOFKEYWORD', key: 'TESTER', cipher: 'Keyword' },
			],
		},
	])('Should Solve Keyword Cipher Correctly', ({ text, key, solutions }) => {
		expect(keyword(text, English, key)).toEqual(solutions);
	});
});
