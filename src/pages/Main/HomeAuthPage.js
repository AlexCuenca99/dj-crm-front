import React from 'react';

import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export function HomeAuthPage() {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const handleLogOut = () => {
		logout();
		navigate('/');
	};
	return (
		<div>
			HomeAuthPage
			<button onClick={handleLogOut}>Log out</button>
		</div>
	);
}
