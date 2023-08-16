import { merge, omit, valuesIn } from 'lodash';
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

export async function createAgentsApi(token, formValue) {
	try {
		const formNestedValue = { user: formValue };

		const url = `${BASE_API}/agents/`;
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(formNestedValue),
		};
		const response = await fetch(url, params);

		if (!response.ok) {
			const result = await response.json();

			// Merge entites in results object
			// Remove errors from original object
			const errorValues = omit(merge(result, result.errors), ['errors']);
			throw new Error('Error in request', { cause: errorValues });
		}
		const result = await response.json();

		return result;
	} catch (error) {
		throw error;
	}
}

export async function getAgentByIdApi(token, id) {
	try {
		const url = `${BASE_API}/agents/${id}/`;
		const params = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await fetch(url, params);

		if (!response.ok) {
			const result = await response.json();
			const errorValues = omit(merge(result, result.errors), ['errors']);
			throw new Error('Error in request', { cause: errorValues });
		}
		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}

export async function getMyLeadsApi(token) {
	try {
		const url = `${BASE_API}/agents/my-leads/`;
		const params = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await fetch(url, params);

		if (!response.ok) {
			const result = await response.json();
			const errorValues = omit(merge(result, result.errors), ['errors']);
			throw new Error('Error in request', { cause: errorValues });
		}
		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}

export async function updateMyLeadApi(token, id, formValue) {
	try {
		const url = `${BASE_API}/agents/my-leads/${id}/`;
		const params = {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formValue),
		};
		const response = await fetch(url, params);

		if (!response.ok) {
			const result = await response.json();
			const errorValues = omit(merge(result, result.errors), ['errors']);
			throw new Error('Error in request', { cause: errorValues });
		}

		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}
