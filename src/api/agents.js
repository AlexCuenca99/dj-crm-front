import { valuesIn } from 'lodash';
import { BASE_API } from 'utils/constants';

export async function getAgentsApi(token) {
	try {
		const url = `${BASE_API}/agents/`;
		const params = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await fetch(url, params);

		if (!response.ok) {
			const result = await response.json();
			const errorValues = valuesIn(result);
			throw new Error(errorValues);
		}

		const result = await response.json();

		return result;
	} catch (error) {
		throw error;
	}
}
