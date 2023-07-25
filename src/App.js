import '@fontsource-variable/open-sans';
import '@fontsource/poppins';

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { Navigation } from './routes';

const theme = extendTheme({
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Open Sans Variable', sans-serif`,
	},
});

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<Navigation />
		</ChakraProvider>
	);
}
