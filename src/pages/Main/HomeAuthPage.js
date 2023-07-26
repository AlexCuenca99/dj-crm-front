import React from 'react';

import { useAuth } from '../../hooks';

export function HomeAuthPage() {
	const { logout } = useAuth();
	return (
		<div>
			HomeAuthPage
			<button onClick={logout}>Log out</button>
		</div>
	);
}
