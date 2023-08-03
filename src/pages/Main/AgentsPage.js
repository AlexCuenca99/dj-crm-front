import { HeaderPage } from 'components/Main';
import React from 'react';

export function AgentsPage() {
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
