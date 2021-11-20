import { calculateIndexOfCoincidence } from '../../src/utils/IndexOfCoincidence';
import { English } from '../../src/state';

describe('IndexOfCoincidence', () => {
	test.each([
		{
			text: '',
			result: 0,
		},
		{
			text: 'AAAA',
			result: 1,
		},
		{
			text: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
			result: 0.021848739495798318,
		},
		{
			text: 'To be, or not to be, that is the question—Whether \'tis Nobler in the mind to suffer The Slings and Arrows of outrageous Fortune, Or to take Arms against a Sea of troubles, And by opposing end them? William Shakespeare - Hamlet'.toUpperCase(),
			result: 0.06773240883410375,
		},
	])('Should Calculate Index Correctly', ({ text, result }) => {
		expect(calculateIndexOfCoincidence(text, English)).toEqual(result);
	});
});
