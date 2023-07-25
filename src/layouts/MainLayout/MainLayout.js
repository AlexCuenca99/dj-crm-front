import React from 'react';

import { Navbar } from '../../components/Main';
import { LoginPage } from '../../pages/Main';

export function MainLayout(props) {
	const { children } = props;

	const auth = null;

	if (!auth) return <LoginPage />;

	return (
		<div>
			{/* <Navbar /> */}
			{children}
		</div>
	);
}
