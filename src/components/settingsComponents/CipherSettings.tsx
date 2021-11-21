import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Keyword } from './Keyword';
import { Caesar } from './Caesar';
import { Affine } from './Affine';

import { Solution } from '../../ciphers/Solution';
import { Ciphers } from '../../ciphers';
import { Alphabet } from '../../state';

export interface CipherSettingsProps {
	cipher: keyof typeof Ciphers;
	alphabet: Alphabet;
	text: string;
	onSolutionUpdate: (solutions: Solution[]) => void;
}

export const CipherSettings: React.FC<CipherSettingsProps> = ({
	cipher,
	alphabet,
	text,
	onSolutionUpdate,
}) => {
	const getSettings = (c: keyof typeof Ciphers): React.ReactNode => {
		switch (c) {
		case 'Caesar':
			return (
				<Caesar alphabet={alphabet} text={text} onUpdate={onSolutionUpdate} />
			);

		case 'Affine':
			return (
				<Affine alphabet={alphabet} text={text} onUpdate={onSolutionUpdate} />
			);
		case 'Keyword':
			return (
				<Keyword
					alphabet={alphabet}
					text={text}
					onUpdate={onSolutionUpdate}
				/>
			);
		default:
			return <p>No cipher selected!</p>;
		}
	};

	return (
		<Flex direction="column" height="full" width="full">
			{getSettings(cipher)}
		</Flex>
	);
};
