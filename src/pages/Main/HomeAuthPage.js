import React from 'react';
import { map } from 'lodash';
import { MdSupervisedUserCircle } from 'react-icons/md';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';

import { TitleLabelIconCard } from 'components/Main';

const cardItems = [
	{
		title: 'Organizers',
		mainLabel: '10',
		subLabel: 'Leads',
		icon: MdSupervisedUserCircle,
	},
	{
		title: 'Agents',
		mainLabel: '10',
		subLabel: 'Leads',
		icon: MdSupervisedUserCircle,
	},
	{
		title: 'Leads',
		mainLabel: '10',
		subLabel: 'Leads',
		icon: MdSupervisedUserCircle,
	},
	{
		title: 'Assigned',
		mainLabel: '10',
		subLabel: 'Leads',
		icon: MdSupervisedUserCircle,
	},
];
export function HomeAuthPage() {
	return (
		<>
			<SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4 }} spacing={10}>
				{map(cardItems, (cardItem, index) => (
					<TitleLabelIconCard
						title={cardItem.title}
						mainLabel={cardItem.mainLabel}
						subLabel={cardItem.subLabel}
						icon={cardItem.icon}
					/>
				))}
			</SimpleGrid>
			<SimpleGrid
				columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
				spacing={10}
				mt="7"
			>
				<Card align="center">
					<CardHeader>
						<Heading size="md"> Customer dashboard</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							View a summary of all your customers over the last
							month.
						</Text>
					</CardBody>
					<CardFooter>
						<Button colorScheme="blue">View here</Button>
					</CardFooter>
				</Card>
				<Card align="center">
					<CardHeader>
						<Heading size="md"> Customer dashboard</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							View a summary of all your customers over the last
							month.
						</Text>
					</CardBody>
					<CardFooter>
						<Button colorScheme="blue">View here</Button>
					</CardFooter>
				</Card>
			</SimpleGrid>
		</>
	);
}
