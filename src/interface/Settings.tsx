import React, { useState, useEffect } from 'react';

import { Flex, Textarea, Select, Heading, Button } from '@chakra-ui/react';

import { Alphabet, English, loadAlphabets } from '../state';
import { Ciphers } from '../ciphers';

export interface SettingsProps {
	text: string;
	alphabet: Alphabet;
	cipher: keyof typeof Ciphers;
	onUpdate: (
		text: string,
		alphabet: Alphabet,
		cipher: keyof typeof Ciphers
	) => void;
}

export const Settings: React.FC<SettingsProps> = ({
	text,
	alphabet,
	cipher,
	onUpdate,
}) => {
	const [alphabets, setAlphabets] = useState<Alphabet[]>([English]);

	useEffect(() => {
		setAlphabets([...alphabets, ...loadAlphabets()]);
	}, []);

	return (
		<Flex direction="column" margin="2vh">
			<Heading>Settings</Heading>

			<Flex direction="column" justify="space-around" height="40%">
				<Textarea
					placeholder="Text to decipher"
					value={text}
					onChange={(e) => onUpdate(e.target.value, alphabet, cipher)}
					focusBorderColor="orange.500"
				/>

				<Flex direction="row" justify="space-between">
					<Button
						colorScheme="orange"
						onClick={() => onUpdate(text.toUpperCase(), alphabet, cipher)}
					>
						Capitalize Text
					</Button>

					<Button
						colorScheme="orange"
						onClick={() => onUpdate(text.replaceAll(' ', ''), alphabet, cipher)}
					>
						Remove Spaces
					</Button>
				</Flex>

				<Select
					value={alphabet.name}
					onChange={(e) =>
						onUpdate(
							text,
							alphabets.find((a) => a.name === e.target.value) as Alphabet,
							cipher
						)
					}
				>
					{alphabets.map((a) => (
						<option value={a.name}>{a.name}</option>
					))}
				</Select>

				<Select
					value={cipher}
					onChange={(e) =>
						onUpdate(text, alphabet, e.target.value as keyof typeof Ciphers)
					}
				>
					{Object.keys(Ciphers).map((c) => (
						<option value={c}>{c}</option>
					))}
				</Select>
			</Flex>

			<Flex direction="column" height="40%">
				<Heading>{cipher} Settings</Heading>
			</Flex>
		</Flex>
	);
};
