import React from 'react';
import { MdOutlineAssignment } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link as ReacRouterLink } from 'react-router-dom';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Icon,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';

export function UnassignedLeadsCard(props) {
	const { fullName, id } = props;

	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow="hidden"
			variant="outline"
		>
			<Icon
				as={MdOutlineAssignment}
				color="cyan.400"
				w={14}
				h={14}
				bg="cyan.100"
				mt={5}
				ml={5}
				p={2}
				rounded={30}
			/>
			<Stack>
				<CardBody>
					<Heading as="h3" size="md">
						{fullName}
					</Heading>
					<Text py={2}>A lead is waiting for be assigned</Text>
				</CardBody>
				<CardFooter>
					<Link
						as={ReacRouterLink}
						to={`/users/leads/${id}`}
						color="cyan.400"
						fontWeight="bold"
					>
						Lets assign it <Icon as={FaArrowRightLong} />
					</Link>
				</CardFooter>
			</Stack>
		</Card>
	);
}
