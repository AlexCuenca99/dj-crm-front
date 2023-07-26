import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from '@chakra-ui/react';
import React from 'react';

export function Unauthorized() {
	return (
		<div>
			<Alert status="warning">
				<AlertIcon />
				<AlertTitle>You does not have permission to be here</AlertTitle>
				<AlertDescription>
					Only Organizers users can open this page
				</AlertDescription>
			</Alert>
		</div>
	);
}
