import { Box, Flex, Heading, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export function HeaderPage(props) {
	const { title, action, actionTitle, action2, actionTitle2 } = props;

	return (
		<Box>
			<Flex minWidth="max-content" alignItems="center" gap="2">
				<VStack align={'start'}>
					<Heading as="h2" size={'2xl'}>
						{title}
					</Heading>
					<Link onClick={action2}>{actionTitle2}</Link>
				</VStack>
				<Spacer />
				<Link onClick={action}>{actionTitle}</Link>
			</Flex>
		</Box>
	);
}
