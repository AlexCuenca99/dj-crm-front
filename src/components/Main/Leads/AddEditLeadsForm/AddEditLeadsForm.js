import React from 'react';
import { genderOptions } from '../../../../utils/feeders';
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

import './AddEditLeadsForm.scss';

export function AddEditLeadsForm() {
	return (
		<div className="add-edit-lead-form">
			<Flex>
				<FormControl mr="5%">
					<FormLabel htmlFor="first-name">First name</FormLabel>
					<Input id="first-name" placeholder="First name" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="last-name">Last name</FormLabel>
					<Input id="last-name" placeholder="First name" />
				</FormControl>
			</Flex>
			<FormControl mt="5%">
				<FormLabel htmlFor="email">Email address</FormLabel>
				<Input id="email" type="email" placeholder="Email address" />
			</FormControl>
			<Box position="relative" padding="10">
				<Divider />
				<AbsoluteCenter bg="white" px="4">
					Details
				</AbsoluteCenter>
			</Box>
			<Flex>
				<FormControl mr="5%">
					<FormLabel
						htmlFor="birth"
						className="add-edit-lead-form__secondary-label"
					>
						Birth Date
					</FormLabel>
					<Input id="birth" type="date" size="sm" />
				</FormControl>
				<FormControl>
					<FormLabel
						htmlFor="gender"
						className="add-edit-lead-form__secondary-label"
					>
						Gender
					</FormLabel>
					<Select placeholder="Select option" size="sm">
						{map(genderOptions, (gender, _) => (
							<option value={gender.key}>{gender.text}</option>
						))}
					</Select>
				</FormControl>
			</Flex>
			<FormControl mt="5%">
				<FormLabel
					htmlFor="address"
					className="add-edit-lead-form__secondary-label"
				>
					Address
				</FormLabel>
				<Input id="address" placeholder="Address" size="sm" />
			</FormControl>
			<FormControl mt="5%">
				<FormLabel
					htmlFor="phone"
					className="add-edit-lead-form__secondary-label"
				>
					Phone
				</FormLabel>
				<Input id="phone" placeholder="Phone number" size="sm" />
			</FormControl>
			<FormControl mt="5%">
				<FormLabel
					htmlFor="agent"
					className="add-edit-lead-form__secondary-label"
				>
					Agent
				</FormLabel>
				<Select placeholder="Select and agent" size="sm">
					<option value={0}>Agent 1</option>
					<option value={1}>Agent 2</option>
					<option value={2}>Agent 3</option>
				</Select>
			</FormControl>
		</div>
	);
}
