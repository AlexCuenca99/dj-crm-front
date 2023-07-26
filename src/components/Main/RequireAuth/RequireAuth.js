import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks';

export function RequireAuth(props) {
	const { allowedRoles } = props;
	const { auth } = useAuth();
	const location = useLocation();

	return allowedRoles.includes(auth?.me.role) ? (
		<Outlet />
	) : (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	);
}
