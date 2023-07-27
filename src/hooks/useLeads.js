import { useState } from 'react';
import { getLeadsApi } from '../api/leads';
import { useAuth } from '../hooks';

export function useLeads() {
	const { auth } = useAuth();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [leads, setLeads] = useState(null);

	const getLeads = async () => {
		try {
			setLoading(true);
			const response = await getLeadsApi(auth.token);
			setLeads(response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	return {
		loading,
		error,
		leads,

		getLeads,
	};
}
