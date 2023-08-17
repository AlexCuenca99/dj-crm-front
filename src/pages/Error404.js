import { Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export function Error404() {
	return (
		<Center h="100vh" flexDirection="column">
			<Image src="/svgs/undraw-building-block.svg" w="50vh" mb="7" />
			<Heading>This page is under construction</Heading>
			<Text fontSize="xl">We are working on it!</Text>
		</Center>
	);
}
