import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
} from '@chakra-ui/react';

import './Unauthorized.scss';

export function Unauthorized() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/login');
	};

	return (
		<div className="unathorized">
			<Alert
				status="warning"
				variant="subtle"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				height="200px"
			>
				<AlertIcon boxSize="40px" mr={0} />
				<AlertTitle mt={4} mb={1} fontSize="lg">
					We are sorry
				</AlertTitle>
				<AlertDescription maxWidth="sm">
					The page you are looking for is restricted for authenticated
					users. Please:
				</AlertDescription>
				<Button colorScheme="teal" onClick={handleNavigate}>
					Log-in
				</Button>
			</Alert>
		</div>
	);
}
