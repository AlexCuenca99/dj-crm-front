import { useState } from 'react';
import { getLeadsApi, createLeadApi, updateLeadApi } from '../api/leads';
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
			throw error;
		}
	};

	const createLead = async (data) => {
		try {
			setLoading(true);
			await createLeadApi(auth.token, data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			throw error;
		}
	};

	const updateLead = async (id, data) => {
		try {
			setLoading(true);
			await updateLeadApi(auth.token, id, data);
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
		leads,

		getLeads,
		createLead,
		updateLead,
	};
}
