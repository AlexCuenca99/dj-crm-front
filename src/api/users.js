import { result, valuesIn } from 'lodash';
import { BASE_API } from '../utils/constants';

export async function loginApi(formValue) {
	try {
		const url = `${BASE_API}/jwt/create/`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formValue),
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
export async function getMeApi(token) {
	try {
		const url = `${BASE_API}/users/me/`;
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
