import React, { useEffect } from 'react';
import { useLeads } from '../../hooks';

export function LeadsPage() {
	const { loading, error, leads, getLeads } = useLeads();

	console.log(leads);

	useEffect(() => {
		getLeads();
	}, []);

	return (
		<div>
			<h1>LeadsPage</h1>
		</div>
	);
}
