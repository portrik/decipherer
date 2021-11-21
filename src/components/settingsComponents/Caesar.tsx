import React, { useState, useEffect } from 'react';

import {
	Flex,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';

import { Solution } from '../../ciphers/Solution';
import { caesar } from '../../ciphers/Caesar';
import { Alphabet } from '../../state';

export interface CaesarProps {
	text: string;
	alphabet: Alphabet;
	onUpdate: (solutions: Solution[]) => void;
}

export const Caesar: React.FC<CaesarProps> = ({ text, alphabet, onUpdate }) => {
	const [key, setKey] = useState(0);

	useEffect(() => {
		onUpdate(caesar(text, alphabet, key !== 0 ? key : undefined));
	}, [key, text, alphabet]);

	return (
		<Flex direction="column" justify="space-around">
			<FormControl>
				<FormLabel>Cipher Key (0 Generates All Possible Solutions)</FormLabel>

				<NumberInput
					value={key}
					onChange={(_, v) => setKey(Math.abs(v % alphabet.characters.length))}
				>
					<NumberInputField />

					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>
		</Flex>
	);
};
