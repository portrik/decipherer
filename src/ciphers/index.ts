import { affine } from './Affine';
import { caesar } from './Caesar';
import { keyword } from './Keyword';

export const Ciphers: { [key: string]: Function } = {
	Caesar: caesar,
	Affine: affine,
	Keyword: keyword,
};
