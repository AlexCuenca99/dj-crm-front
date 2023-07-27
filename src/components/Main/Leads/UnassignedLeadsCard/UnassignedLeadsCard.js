import React from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Link,
	Text,
} from '@chakra-ui/react';
import { Link as ReacRouterLink } from 'react-router-dom';

export function UnassignedLeadsCard(props) {
	const { fullName, id } = props;

	return (
		<Card>
			<CardHeader>
				<Heading>{fullName}</Heading>
			</CardHeader>
			<CardBody>
				<Text>A lead is waiting for be assigned</Text>
			</CardBody>
			<CardFooter>
				<Link
					as={ReacRouterLink}
					to={`/users/leads/${id}`}
					color="teal.400"
					fontWeight="bold"
				>
					Lets assign it!
				</Link>
			</CardFooter>
		</Card>
	);
}
