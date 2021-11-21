import React from 'react';

import {
	Table,
	TableCaption,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
} from '@chakra-ui/react';

import { Solution } from '../../ciphers/Solution';
import { Alphabet } from '../../state';
import { calculateIndexOfCoincidence } from '../../utils';

export interface SolutionsProps {
	solutions: Solution[];
	alphabet: Alphabet;
}

export const Solutions: React.FC<SolutionsProps> = ({
	solutions,
	alphabet,
}) => {
	return (
		<Table variant="simple">
			<TableCaption>
				{solutions.length > 0 ? solutions[0].cipher : 'No'} Solutions
			</TableCaption>

			<Thead>
				<Tr>
					<Th>Key</Th>
					<Th>Deviance from Alphabet Index of Coincidence</Th>
					<Th>Text</Th>
				</Tr>
			</Thead>

			<Tbody maxHeight="80vh" overflow="scroll">
				{solutions.map((s) => (
					<Tr>
						<Td>{s.key}</Td>
						<Td>
							{Math.abs(
								alphabet.indexOfCoincidence -
									calculateIndexOfCoincidence(s.text, alphabet)
							)}
						</Td>
						<Td>{s.text}</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};
