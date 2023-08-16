import React from 'react';
import { map } from 'lodash';
import {
	Avatar,
	Select,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

import { leadsCategoryOptions } from 'utils/feeders';

export function AssignedLeadsTable(props) {
	const { leads, handleCategoryChange } = props;
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption> My assigned leads</TableCaption>
				<Thead>
					<Tr>
						<Th></Th>
						<Th>Full Name</Th>
						<Th>Status</Th>
					</Tr>
				</Thead>
				<Tbody>
					{map(leads, (lead, _) => (
						<Tr key={lead.id}>
							<Td>
								<Avatar
									name={lead.first_name}
									src={lead.avatar}
									size="sm"
									mr={2}
									mb={2}
									border="2px solid"
									borderColor="blue.500"
								/>
							</Td>
							<Td>
								{lead.first_name} {lead.last_name}
							</Td>
							<Actions
								lead={lead}
								handleCategoryChange={handleCategoryChange}
							/>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

function Actions(props) {
	const { lead, handleCategoryChange } = props;
	return (
		<Td>
			<Select
				size="sm"
				placeholder="Select status"
				onChange={(e) => handleCategoryChange(e, lead)}
			>
				{map(leadsCategoryOptions, (category, _) => (
					<option key={category.key} value={category.value}>
						{category.text}
					</option>
				))}
			</Select>
		</Td>
	);
}
