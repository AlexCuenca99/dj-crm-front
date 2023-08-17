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
	Skeleton,
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
		document.title = 'My CRM Dashboard';

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
					<Skeleton
						height="100px"
						key={index}
						borderRadius="20px"
						isLoaded={!loading}
						fadeDuration={1}
					>
						<TitleLabelIconCard
							key={index}
							title={cardItem.title}
							mainLabel={cardItem.mainLabel}
							subLabel={cardItem.subLabel}
							icon={cardItem.icon}
						/>
					</Skeleton>
				))}
			</SimpleGrid>
			<SimpleGrid columns={1} spacing={10} mt="7">
				<Skeleton
					isLoaded={!loading}
					fadeDuration={2}
					height="300px"
					borderRadius="20px"
				>
					<Card align="center">
						<CardHeader>
							<Heading size="md"> Customer dashboard</Heading>
						</CardHeader>
						<CardBody>
							<Text>
								View a summary of all your customers over the
								last month.
							</Text>
						</CardBody>
						<CardFooter>
							<Button colorScheme="blue">View here</Button>
						</CardFooter>
					</Card>
				</Skeleton>
			</SimpleGrid>
		</>
	);
}
