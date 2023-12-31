import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { map } from 'lodash';
import {
	Divider,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Flex,
	Input,
	Select,
	AbsoluteCenter,
	Box,
} from '@chakra-ui/react';

import { genderOptions } from 'utils/feeders';
import { useLeads, useAgent } from 'hooks';

import './AddEditLeadsForm.scss';

export function AddEditLeadsForm(props) {
	const {
		lead,
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

	const { createLead, updateLead, loading } = useLeads();
	const { getAgents, agents } = useAgent();

	const formik = useFormik({
		initialValues: initialValues(lead),
		validationSchema: Yup.object(validationSchema()),
		validateOnBlur: true,
		validateOnChange: false,
		validateOnMount: true,

		onSubmit: async (formValue) => {
			try {
				if (lead) {
					await updateLead(lead.id, formValue);

					setToastTitle('Lead updated');
					setToastDescription("We've updated the lead for you");
				} else {
					await createLead(formValue);

					setToastTitle('Lead created');
					setToastDescription("We've created your lead for you");
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
					lead
						? 'Lead could not be updated'
						: 'Lead could not be created'
				);
				setToastDescription(error.message);
				setToastStatus('error');
				setToastDuration(7000);
				setToastIsClosable(true);
			}
		},
	});

	useEffect(() => {
		getAgents();
	}, [formik.touched.agent]);

	useEffect(() => {
		setFormLoading(loading);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	useEffect(() => {
		setFormik(formik);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formik]);

	return (
		<form
			id="leads-form"
			className="add-edit-lead-form"
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
							Enter the lead's birth day
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
			<FormControl
				isInvalid={formik.touched.agent && formik.errors.agent}
				mt="5%"
			>
				<FormLabel
					htmlFor="agent"
					className="add-edit-lead-form__secondary-label"
				>
					Agent
				</FormLabel>
				<Select
					placeholder="Select and agent"
					size="sm"
					onBlur={formik.handleBlur}
					defaultValue={formik.values.gender}
					onChange={(event) =>
						formik.setFieldValue('agent', event.target.value)
					}
				>
					{map(agents, (agent, _) => (
						<option key={agent.id} value={agent.id}>
							{`${agent.user.first_name} ${agent.user.last_name}`}
						</option>
					))}
				</Select>
				{!formik.errors.agent ? (
					<FormHelperText>Select the agent</FormHelperText>
				) : (
					<FormErrorMessage>{formik.errors.agent}</FormErrorMessage>
				)}
			</FormControl>
		</form>
	);
}

function initialValues(data) {
	return {
		email: data?.email || '',
		first_name: data?.first_name || '',
		last_name: data?.last_name || '',
		birth: data?.birth || '',
		gender: data?.gender || '',
		address: data?.address || '',
		phone: data?.phone || '',
		agent: data?.agent || '',
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
		agent: Yup.string(),
	};
}
