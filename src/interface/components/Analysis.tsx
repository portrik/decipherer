import React, { useState } from 'react';

import { Flex, Heading } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';

import { calculateIndexOfCoincidence, frequency } from '../../utils';
import { Alphabet } from '../../state';

export interface AnalysisProps {
	text: string;
	alphabet: Alphabet;
}

const chartOptions = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

export const Analysis: React.FC<AnalysisProps> = ({ text, alphabet }) => {
	const [shift, setShift] = useState(0);

	return (
		<Flex direction="column">
			<Flex direction="row" justify="space-between">
				<Heading size="xl">Index of Coincidence: </Heading>

				<Heading size="xl">
					{calculateIndexOfCoincidence(text, alphabet)}
				</Heading>
			</Flex>

			<Flex direction="column" marginTop="2vh">
				<Heading size="xl">Frequency Analysis</Heading>

				<Line
					options={chartOptions}
					data={{
						labels: alphabet.characters.split(''),
						datasets: [
							{
								label: 'Alphabet Frequency',
								data: Object.values(alphabet.characterCoincidence),
								fill: false,
								backgroundColor: '#DD6B20',
								borderColor: '#DD6B20',
								borderWidth: 1,
							},
							{
								label: 'Ciphered Text',
								data: Object.values(frequency(text, alphabet)),
								fill: false,
								backgroundColor: '#EDF2F7',
								borderColor: '#EDF2F7',
								borderWidth: 2,
							},
						],
					}}
				/>
			</Flex>
		</Flex>
	);
};
