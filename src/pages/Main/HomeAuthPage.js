import React, { useEffect, useState } from 'react';
import { filter, map } from 'lodash';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { Heading, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { useUser, useLeads } from 'hooks';
import { TitleLabelIconCard, LinearGraphic } from 'components/Main';

export function HomeAuthPage() {
	const { loading, getAllUsers } = useUser();
	const { getLeads } = useLeads();
	const [orgUsers, setOrgUsers] = useState(0);
	const [agtUsers, setAgtUsers] = useState(0);
	const [leadUsers, setLeadUsers] = useState(0);
	const [leadsByCategory, setLeadsByCategory] = useState([]);

	useEffect(() => {
		document.title = 'My CRM Dashboard';

		getAllUsers().then((res) => {
			setAgtUsers(filter(res, { role: 'AGT' }).length);
			setOrgUsers(filter(res, { role: 'ORG' }).length);
		});
		getLeads().then((res) => {
			setLeadUsers(res.length);
			let updateCategoryLeads = {};
			updateCategoryLeads = [
				{
					name: 'New',
					value: filter(res, (currRes) => currRes.category === 'NEW')
						.length,
					fill: '#8884d8',
				},
				{
					name: 'Lost',
					value: filter(res, (currRes) => currRes.category === 'LST')
						.length,
					fill: '#83a6ed',
				},
				{
					name: 'Assigned',
					value: filter(res, (currRes) => currRes.category === 'ASG')
						.length,
					fill: '#8dd1e1',
				},
				{
					name: 'Contacted',
					value: filter(res, (currRes) => currRes.category === 'CNT')
						.length,
					fill: '#82ca9d',
				},
				{
					name: 'Unassigned',
					value: filter(res, (currRes) => currRes.category === 'USG')
						.length,
					fill: '#a4de6c',
				},
			];
			setLeadsByCategory([...leadsByCategory, ...updateCategoryLeads]);
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
			mainLabel: leadsByCategory.assigned,
			subLabel: 'ASG',
			icon: MdSupervisedUserCircle,
		},
	];

	return (
		<>
			<Heading as="h2" size="lg" mb="5">
				Dashboard
			</Heading>
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
					<LinearGraphic
						data={leadsByCategory}
						title={'Leads status'}
					/>
				</Skeleton>
			</SimpleGrid>
		</>
	);
}
