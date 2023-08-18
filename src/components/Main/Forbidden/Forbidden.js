import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Center, Heading, Image, Text } from '@chakra-ui/react';

import './Forbidden.scss';

export function Forbidden() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<Center h="calc(100vh - 160px)" flexDirection="column">
			<Image src="/svgs/undraw-warning.svg" w="50vh" mb="7" />
			<Heading>We are sorry</Heading>
			<Text>
				The page you are looking for is restricted for your role. Please
				refer to your system administrator
			</Text>

			<Button colorScheme="teal" onClick={handleNavigate} mt="5">
				Go to home
			</Button>
		</Center>
	);
}
