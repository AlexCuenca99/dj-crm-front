import React from 'react';
import { Box, Flex, Heading, Link, Spacer, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export function HeaderPage(props) {
	const { title, action, actionTitle, action2, actionTitle2 } = props;

	return (
		<Box>
			<Flex minWidth="max-content" alignItems="center" gap="2">
				<VStack align={'start'}>
					<Heading as="h2" size={'2xl'}>
						{title}
					</Heading>
					<Link onClick={action2} as={ReactRouterLink}>
						{actionTitle2}
					</Link>
				</VStack>
				<Spacer />
				<Link onClick={action} as={ReactRouterLink}>
					{actionTitle}
				</Link>
			</Flex>
		</Box>
	);
}
