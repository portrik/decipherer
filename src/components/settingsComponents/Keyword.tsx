import React, { useState, useEffect, Key } from 'react';

import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { Solution } from '../../ciphers/Solution';
import { keyword } from '../../ciphers/Keyword';
import { Alphabet } from '../../state';

export interface KeywordProps {
	text: string;
	alphabet: Alphabet;
	onUpdate: (solutions: Solution[]) => void;
}

export const Keyword: React.FC<KeywordProps> = ({
	text,
	alphabet,
	onUpdate,
}) => {
	const [key, setKey] = useState('');

	useEffect(() => {
		onUpdate(keyword(text, alphabet, key));
	}, [text, alphabet, key]);

	return (
		<Flex direction="column" justify="space-around">
			<FormControl>
				<FormLabel>Keyword</FormLabel>

				<Input
					value={key}
					onChange={(e) => setKey(e.target.value)}
					focusBorderColor="orange.500"
				/>
			</FormControl>
		</Flex>
	);
};
