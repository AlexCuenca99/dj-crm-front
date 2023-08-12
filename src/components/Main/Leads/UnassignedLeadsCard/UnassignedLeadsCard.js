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
	Text,
} from '@chakra-ui/react';

export function UnassignedLeadsCard(props) {
	const { fullName, id } = props;

	return (
		<Card>
			<CardHeader>
				<Heading size="md">{fullName}</Heading>
			</CardHeader>
			<CardBody>
				<Text>
					View a summary of all your customers over the last month.
				</Text>
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
		</Card>
	);
}
