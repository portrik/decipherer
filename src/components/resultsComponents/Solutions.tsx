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
		<Table variant="simple" overflowX="scroll">
			<TableCaption>
				{solutions.length > 0 ? solutions[0].cipher : 'No'} Solutions
			</TableCaption>

			<Thead>
				<Tr>
					<Th>Key</Th>
					<Th>Index of Coincidence Deviance</Th>
					<Th>Text</Th>
				</Tr>
			</Thead>

			<Tbody maxHeight="80vh" overflow="scroll">
				{solutions
					.map((s) => ({
						...s,
						index: Math.abs(
							alphabet.indexOfCoincidence -
								calculateIndexOfCoincidence(s.text, alphabet)
						),
					}))
					.sort((a, b) => a.index - b.index)
					.map((s) => (
						<Tr>
							<Td>{s.key}</Td>
							<Td>{s.index}</Td>
							<Td>{s.text}</Td>
						</Tr>
					))}
			</Tbody>
		</Table>
	);
};
