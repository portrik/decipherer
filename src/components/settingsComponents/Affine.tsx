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
import { affine } from '../../ciphers/Affine';
import { Alphabet } from '../../state';

export interface AffineProps {
	text: string;
	alphabet: Alphabet;
	onUpdate: (solutions: Solution[]) => void;
}

export const Affine: React.FC<AffineProps> = ({ text, alphabet, onUpdate }) => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	useEffect(() => {
		onUpdate(
			affine(text, alphabet, a !== 0 ? a : undefined, b !== 0 ? b : undefined)
		);
	}, [text, a, b, alphabet]);

	return (
		<Flex direction="column" justify="space-around">
			<FormControl>
				<FormLabel>
					A Coefficient (0 Generates All Possible Solutions with A)
				</FormLabel>

				<NumberInput
					value={a}
					onChange={(_, v) => setA(Math.abs(v % alphabet.characters.length))}
				>
					<NumberInputField />

					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>

			<FormControl>
				<FormLabel>
					B Coefficient (0 Generates All Possible Solutions for B)
				</FormLabel>

				<NumberInput
					value={b}
					onChange={(_, v) => setB(Math.abs(v % alphabet.characters.length))}
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
