import React, { useEffect } from 'react';

import { useAgent } from 'hooks/useAgent';
import { HeaderPage } from 'components/Main';

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
		</>
	);
}
