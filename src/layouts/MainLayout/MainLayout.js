import React from 'react';

export function MainLayout(props) {
	const { children } = props;
	return (
		<div>
			<h1>MainLayout</h1>
			{children}
		</div>
	);
}
