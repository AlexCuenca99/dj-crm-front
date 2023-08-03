import React from 'react';
import { map } from 'lodash';
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

export function AgentsTable(props) {
	const { agents } = props;

	return (
		<TableContainer>
			<Table variant="simple" size="sm">
				<TableCaption>Agent users</TableCaption>
				<Thead>
					<Tr>
						<Th>Full name</Th>
						<Th>Email</Th>
						<Th>Address</Th>
						<Th>Phone</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{map(agents, (agent, _) => (
						<Tr key={agent.id}>
							<Td>{`${agent.first_name} ${agent.last_name}`}</Td>
							<Td>{agent.user.email}</Td>
							<Td>{agent.user.address}</Td>
							<Td>{agent.user.phone}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
