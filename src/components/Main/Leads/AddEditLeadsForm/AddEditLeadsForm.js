import React from 'react';
import { genderOptions } from '../../../../utils/feeders';
import { map } from 'lodash';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Flex,
	Input,
	Select,
} from '@chakra-ui/react';

export function AddEditLeadsForm() {
	return (
		<>
			<Flex>
				<FormControl>
					<FormLabel htmlFor="first-name">First name</FormLabel>
					<Input id="first-name" placeholder="First name" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="last-name">Last name</FormLabel>
					<Input id="last-name" placeholder="First name" />
				</FormControl>
			</Flex>
			<FormControl>
				<FormLabel htmlFor="email">Email address</FormLabel>
				<Input id="email" type="email" />
			</FormControl>
			<Flex>
				<FormControl>
					<FormLabel htmlFor="birth">Birth Date</FormLabel>
					<Input id="birth" type="date" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="gender">Gender</FormLabel>
					<Select placeholder="Select option">
						{map(genderOptions, (gender, _) => (
							<option value={gender.key}>{gender.text}</option>
						))}
					</Select>
				</FormControl>
			</Flex>
			<Flex>
				<FormControl>
					<FormLabel htmlFor="address">Address</FormLabel>
					<Input id="address" placeholder="Address" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="phone">Phone</FormLabel>
					<Input id="phone" placeholder="Phone number" />
				</FormControl>
			</Flex>
		</>
	);
}
