import { useState } from 'react';
import { createAgentsApi, getAgentsApi } from 'api/agents';
import { useAuth } from '../hooks';

export function useAgent() {
	const { auth } = useAuth();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [agents, setAgents] = useState(null);

	const getAgents = async () => {
		try {
			setLoading(true);
			const response = await getAgentsApi(auth.token);
			setAgents(response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			throw error;
		}
	};

	const createAgent = async (data) => {
		try {
			setLoading(true);
			await createAgentsApi(auth.token, data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			throw error;
		}
	};

	return {
		loading,
		error,
		agents,

		getAgents,
		createAgent,
	};
}
