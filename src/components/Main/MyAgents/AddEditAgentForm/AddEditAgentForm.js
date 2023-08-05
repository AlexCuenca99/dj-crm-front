import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { map } from 'lodash';
import { useFormik } from 'formik';
import {
	AbsoluteCenter,
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Select,
} from '@chakra-ui/react';

import { useAgent } from 'hooks';
import { genderOptions } from 'utils/feeders';

export function AddEditAgentForm(props) {
	const {
		agent,
		setFormik,
		onCloseAlertDialog,
		onCloseDrawer,
		setShowToast,
		setFormLoading,
		setToastTitle,
		setToastDescription,
		setToastStatus,
		setToastDuration,
		setToastIsClosable,
		onRefetch,
	} = props;

	const { loading, createAgent } = useAgent();

	const [showPassword, setShowPassword] = useState(false);

	const formik = useFormik({
		initialValues: initialValues(agent),
		validationSchema: Yup.object(validationSchema()),
		validateOnBlur: true,
		validateOnChange: false,
		validateOnMount: true,

		onSubmit: async (formValue) => {
			try {
				if (agent) {
					console.log('Agent Updated, ', formValue);

					setToastTitle('Agent updated');
					setToastDescription("We've updated the agent for you");
				} else {
					await createAgent(formValue);

					setToastTitle('Agent created');
					setToastDescription("We've created your agent for you");
				}

				onCloseAlertDialog();
				onCloseDrawer();
				setShowToast(true);

				// Set Toast values
				setToastStatus('success');
				setToastDuration(6000);
				setToastIsClosable(true);
				onRefetch();
			} catch (error) {
				onCloseAlertDialog();
				setShowToast(true);

				// Set Toast values
				setToastTitle(
					agent
						? 'Agent could not be updated'
						: 'Agent could not be created'
				);
				setToastDescription(error);

				setToastStatus('error');
				setToastDuration(7000);
				setToastIsClosable(true);
			}
		},
	});

	useEffect(() => {
		formik.setFieldValue(
			'username',
			`${formik.values.first_name}${formik.values.last_name}`
		);
	}, [formik.values.first_name, formik.values.last_name]);

	useEffect(() => {
		setFormLoading(loading);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	useEffect(() => {
		setFormik(formik);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formik]);

	const handleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<form
			id="agent-form"
			className="add-edit-agent-form"
			onSubmit={formik.handleSubmit}
		>
			<Flex>
				<FormControl
					isInvalid={
						formik.touched.first_name && formik.errors.first_name
					}
					mr="5%"
				>
					<FormLabel htmlFor="first_name">First name</FormLabel>
					<Input
						id="first_name"
						placeholder="First name"
						value={formik.values.first_name}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{!formik.errors.first_name ? (
						<FormHelperText>Enter your first name</FormHelperText>
					) : (
						<FormErrorMessage>
							{formik.errors.first_name}
						</FormErrorMessage>
					)}
				</FormControl>
				<FormControl
					isInvalid={
						formik.touched.last_name && formik.errors.last_name
					}
				>
					<FormLabel htmlFor="last_name">Last name</FormLabel>
					<Input
						id="last_name"
						placeholder="Last name"
						value={formik.values.last_name}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{!formik.errors.last_name ? (
						<FormHelperText>Enter your last name</FormHelperText>
					) : (
						<FormErrorMessage>
							{formik.errors.last_name}
						</FormErrorMessage>
					)}
				</FormControl>
			</Flex>

			<FormControl
				isInvalid={formik.touched.username && formik.errors.username}
				mt="5%"
			>
				<FormLabel htmlFor="username">Username</FormLabel>
				<Input
					id="username"
					placeholder="Username"
					value={formik.values.username}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{!formik.errors.username ? (
					<FormHelperText>Enter a username</FormHelperText>
				) : (
					<FormErrorMessage>
						{formik.errors.username}
					</FormErrorMessage>
				)}
			</FormControl>

			<FormControl
				isInvalid={formik.touched.email && formik.errors.email}
				mt="5%"
			>
				<FormLabel htmlFor="email">Email address</FormLabel>
				<Input
					id="email"
					type="email"
					placeholder="Email address"
					value={formik.values.email}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{!formik.errors.email ? (
					<FormHelperText>Enter lead's email</FormHelperText>
				) : (
					<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl
				isInvalid={formik.touched.password && formik.errors.password}
				mt="5%"
			>
				<FormLabel htmlFor="password">Password</FormLabel>
				<InputGroup>
					<Input
						pr="4.5rem"
						id="password"
						type={showPassword ? 'text' : 'password'}
						value={formik.values.password}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<InputRightElement width="4.5rem">
						<Button
							h="1.75rem"
							size="sm"
							onClick={handleShowPassword}
						>
							{showPassword ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				{!formik.errors.password ? (
					<FormHelperText>Enter agent's password</FormHelperText>
				) : (
					<FormErrorMessage>
						{formik.errors.password}
					</FormErrorMessage>
				)}
			</FormControl>
			<FormControl
				isInvalid={
					formik.touched.re_password && formik.errors.re_password
				}
				mt="5%"
			>
				<FormLabel htmlFor="re_password">Retype password</FormLabel>
				<InputGroup>
					<Input
						pr="4.5rem"
						id="re_password"
						type={showPassword ? 'text' : 'password'}
						value={formik.values.re_password}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<InputRightElement width="4.5rem">
						<Button
							h="1.75rem"
							size="sm"
							onClick={handleShowPassword}
						>
							{showPassword ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				{!formik.errors.re_password ? (
					<FormHelperText>Retype agent's password</FormHelperText>
				) : (
					<FormErrorMessage>
						{formik.errors.re_password}
					</FormErrorMessage>
				)}
			</FormControl>
			<Box position="relative" padding="10">
				<Divider />
				<AbsoluteCenter bg="white" px="4">
					Details
				</AbsoluteCenter>
			</Box>
			<Flex>
				<FormControl
					isInvalid={formik.touched.birth && formik.errors.birth}
					mr="5%"
				>
					<FormLabel
						htmlFor="birth"
						className="add-edit-lead-form__secondary-label"
					>
						Birth Date
					</FormLabel>
					<Input
						id="birth"
						type="date"
						size="sm"
						value={formik.values.birth}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{!formik.errors.birth ? (
						<FormHelperText>
							Enter the agent's birth day
						</FormHelperText>
					) : (
						<FormErrorMessage>
							{formik.errors.birth}
						</FormErrorMessage>
					)}
				</FormControl>
				<FormControl
					isInvalid={formik.touched.gender && formik.errors.gender}
				>
					<FormLabel
						htmlFor="gender"
						className="add-edit-lead-form__secondary-label"
					>
						Gender
					</FormLabel>
					<Select
						placeholder="Select option"
						size="sm"
						defaultValue={formik.values.gender}
						onChange={(event) =>
							formik.setFieldValue('gender', event.target.value)
						}
						onBlur={formik.handleBlur}
					>
						{map(genderOptions, (gender, _) => (
							<option key={gender.key} value={gender.value}>
								{gender.text}
							</option>
						))}
					</Select>
					{!formik.errors.gender ? (
						<FormHelperText>Enter the gender</FormHelperText>
					) : (
						<FormErrorMessage>
							{formik.errors.gender}
						</FormErrorMessage>
					)}
				</FormControl>
			</Flex>
			<FormControl
				isInvalid={formik.touched.address && formik.errors.address}
				mt="5%"
			>
				<FormLabel
					htmlFor="address"
					className="add-edit-lead-form__secondary-label"
				>
					Address
				</FormLabel>
				<Input
					id="address"
					placeholder="Address"
					size="sm"
					value={formik.values.address}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{!formik.errors.address ? (
					<FormHelperText>Enter the address</FormHelperText>
				) : (
					<FormErrorMessage>{formik.errors.address}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl
				isInvalid={formik.touched.phone && formik.errors.phone}
				mt="5%"
			>
				<FormLabel
					htmlFor="phone"
					className="add-edit-lead-form__secondary-label"
				>
					Phone
				</FormLabel>
				<Input
					id="phone"
					placeholder="Phone number"
					size="sm"
					value={formik.values.phone}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{!formik.errors.phone ? (
					<FormHelperText>Enter the phone</FormHelperText>
				) : (
					<FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
				)}
			</FormControl>
		</form>
	);
}

function initialValues(data) {
	return {
		email: data?.email || 'lorem@lorem',
		first_name: data?.first_name || 'lorem',
		last_name: data?.last_name || 'ipsum',
		birth: data?.birth || '',
		gender: data?.gender || 'M',
		address: data?.address || 'Lorem Ipsum',
		phone: data?.phone || '0000000000',
		password: 'loremipsum',
		re_password: 'loremipsum',
		role: data?.role || 'AGT',
		username: data?.username || '',
	};
}

function validationSchema() {
	return {
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is a required field'),
		first_name: Yup.string()
			.min(3, 'Min. length is 3')
			.max(25, 'Max length is 25')
			.required('First name is a required field'),
		last_name: Yup.string()
			.min(3, 'Min. length is 3')
			.max(25, 'Max length is 25')
			.required('Last name is a required field'),
		birth: Yup.date().max(new Date(), 'Birth must be earlier than today'),
		gender: Yup.string()
			.length(1, 'Gender must have length of 1')
			.required('Gender is a required field'),
		address: Yup.string()
			.min(3)
			.max(100)
			.required('Address is a required field'),
		phone: Yup.string()
			.matches(/^\d+$/, 'Phone should have digits and hypens only')
			.length(10, 'Phone must have 10 numbers')
			.required('Phone is a required field'),
		password: Yup.string()
			.min(8, 'Min length is 8')
			.max(20, 'Max. length is 20')
			.required('Password is a required field'),
		re_password: Yup.string()
			.min(8, 'Min length is 8')
			.max(20, 'Max. length is 20')
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Retype password is a required field'),
		role: Yup.string()
			.length(3, 'Role must have 3 characters')
			.oneOf(['AGT', 'ORG'])
			.required('Role is a required field'),
		username: Yup.string()
			.min(3, 'Min. length is 3 characters')
			.max(20, 'Max. length is 20 characters')
			.required('Username is a required field'),
	};
}
