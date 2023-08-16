import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AbsoluteCenter,
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
	Center,
} from '@chakra-ui/react';

import './Forbidden.scss';

export function Forbidden() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<Center h="calc(100vh - 160px)">
			<Alert
				status="warning"
				variant="subtle"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
			>
				<AlertIcon boxSize="40px" mr={0} />
				<AlertTitle mt={4} mb={1} fontSize="lg">
					We are sorry
				</AlertTitle>
				<AlertDescription maxWidth="sm">
					The page you are looking for is restricted for your role.
					Please refer to your system administrator
				</AlertDescription>
				<Button colorScheme="teal" onClick={handleNavigate} mt="5">
					Go to home
				</Button>
			</Alert>
		</Center>
	);
}
