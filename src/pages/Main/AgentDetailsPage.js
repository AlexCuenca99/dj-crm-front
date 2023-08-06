import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAgent } from 'hooks';

export function AgentDetailsPage() {
	const { loading, agent, error, getAgentById } = useAgent();

	let { id } = useParams();

	useEffect(() => {
		getAgentById(id);
	}, []);

	console.log(agent);
	return (
		<div>
			<h1>Agent Details</h1>
		</div>
	);
}
