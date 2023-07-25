import React from 'react';

import { Navbar } from '../../components/Main';

export function MainLayout(props) {
	const { children } = props;
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
