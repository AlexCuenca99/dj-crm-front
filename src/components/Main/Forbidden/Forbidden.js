import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
} from '@chakra-ui/react';

import './Forbidden.scss';

export function Forbidden() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<div className="forbidden">
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
					The page you are looking for is restricted for your role.
					Please refer to your system administrator
				</AlertDescription>
				<Button colorScheme="teal" onClick={handleNavigate}>
					Go to home
				</Button>
			</Alert>
		</div>
	);
}
