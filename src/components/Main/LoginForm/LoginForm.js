import React, { useState } from 'react';
import * as Yup from 'yup';
import { map } from 'lodash';
import { useFormik } from 'formik';
import {
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	Text,
	FormErrorMessage,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	UnorderedList,
	ListItem,
	Collapse,
} from '@chakra-ui/react';

import { loginApi } from '../../../api/users';
import { useAuth } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
	const navigate = useNavigate();

	const { login } = useAuth();
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: true,
		onSubmit: async (formValue) => {
			try {
				const response = await loginApi(formValue);
				const { access } = response;

				login(access);
				navigate('/');
			} catch (error) {
				console.log(error.message);
				setShowErrorMessage(true);
				setErrorMessage(error.message.split(','));
				setTimeout(() => setShowErrorMessage(false), 3000);
			}
		},
	});

	return (
		<Stack spacing={4}>
			<FormControl
				id="email"
				isInvalid={formik.errors.email && formik.touched.email}
				isRequired
			>
				<FormLabel>Email address</FormLabel>
				<Input
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				{formik.errors.email && (
					<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl
				id="password"
				isInvalid={formik.errors.password && formik.touched.password}
				isRequired
			>
				<FormLabel>Password</FormLabel>
				<Input
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				{formik.errors.password && (
					<FormErrorMessage>
						{formik.errors.password}
					</FormErrorMessage>
				)}
			</FormControl>
			<Stack spacing={10}>
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					align={'start'}
					justify={'space-between'}
				>
					<Checkbox>Remember me</Checkbox>
					<Text color={'blue.400'}>Forgot password?</Text>
				</Stack>
				<Collapse in={showErrorMessage} animateOpacity>
					<Alert status="error" visibility={showErrorMessage}>
						<AlertIcon />
						<AlertTitle>Something went wrong</AlertTitle>
						<AlertDescription>
							<UnorderedList>
								{map(errorMessage, (error, index) => (
									<ListItem key={index}>{error}</ListItem>
								))}
							</UnorderedList>
						</AlertDescription>
					</Alert>
				</Collapse>
				<Button
					bg={'blue.400'}
					color={'white'}
					_hover={{
						bg: 'blue.500',
					}}
					isLoading={formik.isSubmitting}
					onClick={formik.handleSubmit}
				>
					Sign in
				</Button>
			</Stack>
		</Stack>
	);
}

function initialValues() {
	return {
		email: '',
		password: '',
	};
}

function validationSchema() {
	return {
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is a required field'),
		password: Yup.string().required('Password is a required field'),
	};
}
