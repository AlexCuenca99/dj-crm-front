import React, { createContext, useEffect, useState } from 'react';
import { Heading, Spinner } from '@chakra-ui/react';

import { useUser } from '../hooks';
import { getToken, removeToken, setToken } from '../api/token';

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider(props) {
	const { children } = props;
	const { getMe, verifyToken } = useUser();
	const [auth, setAuth] = useState(undefined);

	useEffect(() => {
		(async () => {
			const token = getToken();
			try {
				await verifyToken(token);
				const me = await getMe(token);
				setAuth({ token, me });
			} catch (error) {
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
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Spinner thickness="3px" speed="0.65s" size="lg" />
				<Heading as="h2" size="lg" ml="12px">
					Loading...
				</Heading>
			</div>
		);
	}
	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}
