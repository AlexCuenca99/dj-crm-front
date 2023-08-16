import React from 'react';
import { Badge, Flex, Icon, Text } from '@chakra-ui/react';

export function TitleLabelIconCard(props) {
	const { title, mainLabel, subLabel, icon } = props;

	return (
		<Flex
			borderRadius="20px"
			p="20px"
			h="100px"
			alignItems="center"
			direction="column"
			bg="white"
		>
			<Flex w="100%">
				<Text
					my="auto"
					fontWeight="600"
					textAlign="center"
					fontSize="xl"
					me="auto"
					color="gray.500"
				>
					{title}
				</Text>
				<Flex
					w="38px"
					h="38px"
					align="center"
					justify="center"
					borderRadius="50%"
					me="12px"
					bg="gray.100"
				>
					<Icon w="24px" h="24px" as={icon} />
				</Flex>
			</Flex>

			<Flex mt="auto" justify="space-between" w="100%" align="center">
				<Text fontWeight="600" textAlign="start" fontSize="xl" w="100%">
					{mainLabel}
				</Text>
				<Badge
					borderRadius="9px"
					size="md"
					colorScheme="green"
					color="green.400"
					textAlign="center"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					{subLabel}
				</Badge>
			</Flex>
		</Flex>
	);
}
