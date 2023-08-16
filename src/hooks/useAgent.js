import { useState } from 'react';
import {
	createAgentsApi,
	getAgentByIdApi,
	getAgentsApi,
	getMyLeadsApi,
} from 'api/agents';
import { useAuth } from '../hooks';

export function useAgent() {
	const { auth } = useAuth();

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [agents, setAgents] = useState(null);
	const [agent, setAgent] = useState(null);
	const [myLeads, setMyLeads] = useState([]);

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

	const getAgentById = async (id) => {
		try {
			setLoading(true);
			const response = await getAgentByIdApi(auth.token, id);
			setAgent(response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(false);
			throw error;
		}
	};

	const getMyLeads = async () => {
		try {
			setLoading(true);
			const response = await getMyLeadsApi(auth.token);
			setMyLeads(response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(false);
			throw error;
		}
	};
	return {
		loading,
		error,
		agents,
		agent,
		myLeads,

		getAgents,
		createAgent,
		getAgentById,
		getMyLeads,
	};
}
