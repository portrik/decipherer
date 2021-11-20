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

import { Analysis } from './components';

import { Ciphers } from '../ciphers';
import { Alphabet } from '../state';

export interface ResultsProps {
	text: string;
	alphabet: Alphabet;
	cipher: keyof typeof Ciphers;
}

export const Results: React.FC<ResultsProps> = ({ alphabet, cipher, text }) => {
	const [tab, setTab] = useState(0);

	return (
		<Flex direction="column" margin="2vh">
			<Heading>Analysis</Heading>

			<Tabs
				marginTop="1vh"
				isFitted
				colorScheme="orange"
				height="full"
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

					<TabPanel>Solutions</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};
