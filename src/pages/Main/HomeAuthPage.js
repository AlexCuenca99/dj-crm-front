import React, { useEffect, useState } from 'react';
import { filter, map } from 'lodash';
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
import { useUser, useLeads } from 'hooks';

export function HomeAuthPage() {
	const { loading, getAllUsers } = useUser();
	const { getLeads } = useLeads();
	const [orgUsers, setOrgUsers] = useState(0);
	const [agtUsers, setAgtUsers] = useState(0);
	const [leadUsers, setLeadUsers] = useState(0);
	const [assignedLeads, setAssignedLeads] = useState(0);

	useEffect(() => {
		getAllUsers().then((res) => {
			setAgtUsers(filter(res, { role: 'AGT' }).length);
			setOrgUsers(filter(res, { role: 'ORG' }).length);
		});
		getLeads().then((res) => {
			setLeadUsers(res.length);
			setAssignedLeads(
				filter(res, (currRes) => currRes.agent !== null).length
			);
		});
	}, []);

	const cardItems = [
		{
			title: 'Organizers',
			mainLabel: orgUsers,
			subLabel: 'ORG',
			icon: MdSupervisedUserCircle,
		},
		{
			title: 'Agents',
			mainLabel: agtUsers,
			subLabel: 'AGT',
			icon: MdSupervisedUserCircle,
		},
		{
			title: 'Leads',
			mainLabel: leadUsers,
			subLabel: 'Leads',
			icon: MdSupervisedUserCircle,
		},
		{
			title: 'Assigned',
			mainLabel: assignedLeads,
			subLabel: 'ASG',
			icon: MdSupervisedUserCircle,
		},
	];

	return (
		<>
			<SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4 }} spacing={10}>
				{map(cardItems, (cardItem, index) => (
					<TitleLabelIconCard
						key={index}
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
