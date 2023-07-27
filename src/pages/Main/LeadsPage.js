import React, { useEffect } from 'react';

import { useLeads } from '../../hooks';
import { HeaderPage, UnassignedLeadsCards } from '../../components/Main';
import { isEmpty } from 'lodash';
import {
	Alert,
	AlertIcon,
	Spinner,
	StackDivider,
	VStack,
} from '@chakra-ui/react';
import LeadsTable from '../../components/Main/Leads/LeadsTable/LeadsTable';

export function LeadsPage() {
	const { loading, error, leads, getLeads } = useLeads();

	console.log(leads);

	useEffect(() => {
		getLeads();
	}, []);

	return (
		<>
			<HeaderPage
				title={'Leads'}
				action={() => console.log('Action 1')}
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
					<UnassignedLeadsCards leads={leads} />
				</VStack>
			)}
		</>
	);
}
