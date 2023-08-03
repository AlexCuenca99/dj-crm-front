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

export async function createLeadApi(token, formValue) {
	try {
		const url = `${BASE_API}/leads/`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
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

export async function updateLeadApi(token, id, formValue) {
	try {
		const url = `${BASE_API}/leads/${id}/`;
		const params = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
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
