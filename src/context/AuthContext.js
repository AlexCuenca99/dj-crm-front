import React, { createContext, useEffect, useState } from 'react';

import { getToken, removeToken, setToken } from '../api/token';
import { useUser } from '../hooks';
import { Spinner } from '@chakra-ui/react';

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider(props) {
	const { children } = props;
	const { getMe } = useUser();
	const [auth, setAuth] = useState(undefined);

	useEffect(() => {
		(async () => {
			const token = getToken();

			if (token) {
				const me = await getMe(token);
				setAuth({ token, me });
			} else {
				setAuth(null);
			}
		})();
	}, []);

	const login = async (token) => {
		setToken(token);
		const me = await getMe(token);
		setAuth({ token, me });
	};
	const logout = () => {
		if (auth) {
			removeToken();
			setAuth(null);
		}
	};
	const valueContext = {
		auth,
		login,
		logout,
	};

	if (auth === undefined) {
		return <Spinner label="Fetching your data" />;
	}
	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}