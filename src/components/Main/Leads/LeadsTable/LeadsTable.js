import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { map } from 'lodash';
import React from 'react';

export default function LeadsTable(props) {
	const { leads } = props;

	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>Leads users</TableCaption>
				<Thead>
					<Tr>
						<Th>Full name</Th>
						<Th>Email</Th>
						<Th>Address</Th>
						<Th>Phone</Th>
						<Th>Category</Th>
						<Th>Agent</Th>
					</Tr>
				</Thead>
				<Tbody>
					{map(leads, (lead, index) => (
						<Tr key={lead.id}>
							<Td>{`${lead.first_name} ${lead.last_name}`}</Td>
							<Td>{lead.email}</Td>
							<Td>{lead.address}</Td>
							<Td>
								{lead.agent
									? lead.agent.user.first_name
									: 'No yet assigned'}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
