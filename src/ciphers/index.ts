import { affine } from './Affine';
import { caesar } from './Caesar';

export const Ciphers: { [key: string]: Function } = {
	Caesar: caesar,
	Affine: affine,
};
