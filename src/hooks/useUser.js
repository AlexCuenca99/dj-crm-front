import { useState } from 'react';

import { useAuth } from 'hooks';
import { getMeApi, verifyTokenApi, getAllUsersApi } from '../api/users';

export function useUser() {
	const { auth } = useAuth();

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getMe = async (token) => {
		try {
			const response = await getMeApi(token);
			return response;
		} catch (error) {
			throw error;
		}
	};

	const verifyToken = async (token) => {
		try {
			const response = await verifyTokenApi(token);
			return response;
		} catch (error) {
			throw error;
		}
	};

	const getAllUsers = async () => {
		try {
			setLoading(true);
			const response = await getAllUsersApi(auth.token);
			setUsers(response);
			setLoading(false);
			return response;
		} catch (error) {
			setLoading(false);
			setError(error);

			throw error;
		}
	};
	return {
		users,
		loading,
		error,

		getMe,
		verifyToken,
		getAllUsers,
	};
}
