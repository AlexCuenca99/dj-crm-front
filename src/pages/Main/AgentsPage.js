import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
	Alert,
	AlertIcon,
	Spinner,
	StackDivider,
	VStack,
} from '@chakra-ui/react';

import { useAgent } from 'hooks/useAgent';
import { HeaderPage, AgentsTable } from 'components/Main';

export function AgentsPage() {
	const { agents, loading, error, getAgents } = useAgent();

	useEffect(() => {
		getAgents();
	}, []);

	const addAgent = () => {
		console.log('Add agent');
	};

	return (
		<>
			<HeaderPage
				title={'Agents'}
				actions={addAgent}
				actionTitle={'Create a new agent'}
				action2={() => console.log('Action 2')}
				actionTitle2={'Filter by category'}
			/>
			{loading ? (
				<Spinner />
			) : isEmpty(agents) ? (
				<Alert status="warning">
					<AlertIcon />
					There is not any agent to show
				</Alert>
			) : (
				<VStack
					divider={<StackDivider />}
					spacing={5}
					alignItems="start"
				>
					<AgentsTable agents={agents} />
				</VStack>
			)}
		</>
	);
}
