import { Heading } from '@chakra-ui/react';
import React from 'react';

export function HeaderPage(props) {
	const { title, action, actionTitle, action2, actionTitle2 } = props;

	return (
		<Heading as="h2" size={'2xl'}>
			{title}
		</Heading>
	);
}
