import { getMeApi, verifyTokenApi } from '../api/users';

export function useUser() {
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
	return {
		getMe,
		verifyToken,
	};
}
