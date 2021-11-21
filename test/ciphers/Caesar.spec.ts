import { caesar } from '../../src/ciphers/Caesar';

import { English } from '../../src/state';

describe('Cipher Caesar', () => {
	test.each([
		{
			text: 'WKLVLVDWHVWRIFDHVDU',
			key: 3,
			solutions: [{ text: 'THISISATESTOFCAESAR', key: '3', cipher: 'Caesar' }],
		},
		{
			text: 'CWUHNVYFCYPYNBCMCMQILECHA',
			key: 20,
			solutions: [
				{ text: 'ICANTBELIEVETHISISWORKING', key: '20', cipher: 'Caesar' },
			],
		},
	])('Should Solve Caesar Cipher Correctly', ({ text, key, solutions }) => {
		expect(caesar(text, English, key)).toEqual(solutions);
	});
});
