import React, { useEffect } from 'react';

import { useLeads } from '../../hooks';
import { HeaderPage } from '../../components/Main';
import { isEmpty } from 'lodash';
import { Alert, AlertIcon, Spinner } from '@chakra-ui/react';

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
				<h1>Leads table</h1>
			)}
		</>
	);
}
