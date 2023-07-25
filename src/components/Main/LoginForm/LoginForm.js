import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	Text,
	FormErrorMessage,
} from '@chakra-ui/react';

export function LoginForm() {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: true,
		onSubmit: (formValue) => {
			console.log('Loging in');
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
				<Button
					bg={'blue.400'}
					color={'white'}
					_hover={{
						bg: 'blue.500',
					}}
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
