import React from 'react';

import { LoginPage } from '../../pages/Main';
import { useAuth } from '../../hooks';

export function MainLayout(props) {
	const { children } = props;

	const { auth } = useAuth();

	if (!auth) return <LoginPage />;

	return (
		<div>
			{/* <Navbar /> */}
			{children}
		</div>
	);
}
