import React, { useEffect } from 'react';

import { useLeads } from '../../hooks';
import { HeaderPage, UnassignedLeadsCards } from '../../components/Main';
import { filter, isEmpty } from 'lodash';
import {
	Alert,
	AlertIcon,
	Spinner,
	StackDivider,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import LeadsTable from '../../components/Main/Leads/LeadsTable/LeadsTable';
import { BaseDrawer } from '../../components/Main/BaseDrawer/BaseDrawer';

export function LeadsPage() {
	const { loading, error, leads, getLeads } = useLeads();
	const { onOpen, isOpen, onClose } = useDisclosure();

	useEffect(() => {
		getLeads();
	}, []);

	const unassignedLeads = filter(leads, { agent: null });

	return (
		<>
			<HeaderPage
				title={'Leads'}
				action={onOpen}
				useDisclosure={useDisclosure}
				actionTitle={'Create a new lead'}
				action2={() => console.log('Action 2')}
				actionTitle2={'Filter by category'}
			/>
			{loading ? (
				<Spinner />
			) : isEmpty(leads) ? (
				<Alert status="warning">
					<AlertIcon />
					There is not any lead to show
				</Alert>
			) : (
				<VStack
					divider={<StackDivider />}
					spacing={5}
					alignItems="start"
				>
					<LeadsTable leads={leads} />
					<UnassignedLeadsCards leads={unassignedLeads} />
				</VStack>
			)}
			<BaseDrawer
				title={'Create a new lead'}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
}
