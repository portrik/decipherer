import React, { useState, useEffect } from 'react';

import {
	Flex,
	Textarea,
	Select,
	Heading,
	Button,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';

import { CipherSettings } from './settingsComponents';

import { Alphabet, English, loadAlphabets } from '../state';
import { Ciphers } from '../ciphers';
import { Solution } from '../ciphers/Solution';

export interface SettingsProps {
	text: string;
	alphabet: Alphabet;
	cipher: keyof typeof Ciphers;
	onUpdate: (
		text: string,
		alphabet: Alphabet,
		cipher: keyof typeof Ciphers
	) => void;
	onSolutionUpdate: (solutions: Solution[]) => void;
}

export const Settings: React.FC<SettingsProps> = ({
	text,
	alphabet,
	cipher,
	onUpdate,
	onSolutionUpdate,
}) => {
	const [alphabets, setAlphabets] = useState<Alphabet[]>([English]);

	useEffect(() => {
		setAlphabets([...alphabets, ...loadAlphabets()]);
	}, []);

	return (
		<Flex direction="column" margin="2vh">
			<Heading>Settings</Heading>

			<Flex direction="column" justify="space-around" height="40%">
				<FormControl>
					<FormLabel>Ciphered Text</FormLabel>

					<Textarea
						placeholder="Text to decipher"
						value={text}
						onChange={(e) => onUpdate(e.target.value, alphabet, cipher)}
						focusBorderColor="orange.500"
					/>

					<Flex direction="row" justify="space-between" marginTop="2vh">
						<Button
							colorScheme="orange"
							onClick={() => onUpdate(text.toUpperCase(), alphabet, cipher)}
						>
							Capitalize Text
						</Button>

						<Button
							colorScheme="orange"
							onClick={() =>
								onUpdate(text.replaceAll(' ', ''), alphabet, cipher)
							}
						>
							Remove Spaces
						</Button>
					</Flex>
				</FormControl>

				<FormControl>
					<FormLabel>Alphabet to Solve In</FormLabel>

					<Select
						focusBorderColor="orange.500"
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
							<option value={a.name} key={a.name}>
								{a.name}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl>
					<FormLabel>Cipher</FormLabel>

					<Select
						focusBorderColor="orange.500"
						value={cipher}
						onChange={(e) =>
							onUpdate(text, alphabet, e.target.value as keyof typeof Ciphers)
						}
					>
						{Object.keys(Ciphers).map((c) => (
							<option value={c} key={c}>
								{c}
							</option>
						))}
					</Select>
				</FormControl>
			</Flex>

			<Flex direction="column" height="40%" marginTop="2vh">
				<Heading>{cipher} Settings</Heading>

				<CipherSettings
					text={text}
					alphabet={alphabet}
					onSolutionUpdate={onSolutionUpdate}
					cipher={cipher}
				/>
			</Flex>
		</Flex>
	);
};
