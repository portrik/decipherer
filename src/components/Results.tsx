import React, { useState } from 'react';

import {
	Flex,
	Heading,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react';

import { Analysis, Solutions } from './resultsComponents';

import { Ciphers } from '../ciphers';
import { Alphabet } from '../state';
import { Solution } from '../ciphers/Solution';

export interface ResultsProps {
	text: string;
	alphabet: Alphabet;
	cipher: keyof typeof Ciphers;
	solutions: Solution[];
}

export const Results: React.FC<ResultsProps> = ({
	alphabet,
	cipher,
	text,
	solutions,
}) => {
	const [tab, setTab] = useState(0);

	return (
		<Flex direction="column" margin="2vh">
			<Heading>Analysis</Heading>

			<Tabs
				marginTop="1vh"
				isFitted
				colorScheme="orange"
				maxHeight="90vh"
				overflow="scroll"
				index={tab}
				onChange={(v) => setTab(v)}
			>
				<TabList>
					<Tab>Analysis</Tab>

					<Tab>Solutions</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Analysis text={text} alphabet={alphabet} />
					</TabPanel>

					<TabPanel>
						<Solutions alphabet={alphabet} solutions={solutions} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};
