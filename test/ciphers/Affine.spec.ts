import { affine } from '../../src/ciphers/Affine';

import { English } from '../../src/state';

describe('Cipher Affine', () => {
	test.each([
		{
			text: 'GWZDZDBGNDGRQBQQZON',
			a: 3,
			b: 1,
			solutions: [
				{ text: 'THISISATESTOFAFFINE', key: '3-1', cipher: 'Affine' },
			],
		},
		{
			text: 'PXREWUDYPDCDWMPTPTFHQVPEJ',
			a: 3,
			b: 17,
			solutions: [
				{
					text: 'ICANTBELIEVETHISISWORKING',
					key: '3-17',
					cipher: 'Affine',
				},
			],
		},
	])('Should Solve Affine Correctly', ({ text, a, b, solutions }) => {
		expect(affine(text, English, a, b)).toEqual(solutions);
	});
});
