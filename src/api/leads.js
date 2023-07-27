import { valuesIn } from 'lodash';
import { BASE_API } from '../utils/constants';

export async function getLeadsApi(token) {
	try {
		const url = `${BASE_API}/leads/`;
		const params = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await fetch(url, params);

		if (response.status !== 200) {
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
