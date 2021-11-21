import React, { useState } from 'react';

import { Flex, Heading, Button } from '@chakra-ui/react';
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

	const updateShift = (n: number): void => {
		let newShift = shift + n;

		if (newShift < 0) {
			newShift = alphabet.characters.length + newShift;
		}

		setShift(newShift % alphabet.characters.length);
	};

	const rotate = (arr: number[], direction: number): number[] => {
		const result = [...arr];

		if (direction < 0) {
			for (let i = 0; i > direction; --i) {
				result.unshift(result.pop() as number);
			}
		} else if (direction > 0) {
			for (let i = 0; i < direction; ++i) {
				result.push(result.shift() as number);
			}
		}

		return result;
	};

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
								label: 'Ciphered Text Frequency',
								data: rotate(Object.values(frequency(text, alphabet)), shift),
								fill: false,
								backgroundColor: '#EDF2F7',
								borderColor: '#EDF2F7',
								borderWidth: 2,
							},
						],
					}}
				/>

				<Flex direction="row" justify="space-between" marginTop="2vh">
					<Button colorScheme="orange" onClick={() => updateShift(1)}>
						Shift Left
					</Button>

					<Heading size="lg">Current shift: {shift}</Heading>

					<Button colorScheme="orange" onClick={() => updateShift(-1)}>
						Shift Right
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};
