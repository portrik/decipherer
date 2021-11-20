import React, { useState } from 'react';

import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';

import { Settings } from './Settings';
import { Results } from './Results';

import { Alphabet, English, theme } from '../state';
import { Ciphers } from '../ciphers';

export const App: React.FC = () => {
	const [text, setText] = useState('');
	const [alphabet, setAlphabet] = useState(English);
	const [cipher, setCipher] = useState<keyof typeof Ciphers>('Caesar');

	return (
		<ChakraProvider theme={theme}>
			<SimpleGrid columns={{ sm: 1, md: 2 }} height="100vh" width="100vw">
				<Settings
					text={text}
					alphabet={alphabet}
					cipher={cipher}
					onUpdate={(t: string, a: Alphabet, c: keyof typeof Ciphers) => {
						setText(t);
						setAlphabet(a);
						setCipher(c);
					}}
				/>

				<Results alphabet={alphabet} cipher={cipher} text={text} />
			</SimpleGrid>
		</ChakraProvider>
	);
};
