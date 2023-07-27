import React from 'react';
import { map } from 'lodash';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	Link,
	Table,
	TableCaption,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

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
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{map(leads, (lead, _) => (
						<Tr key={lead.id}>
							<Td>{`${lead.first_name} ${lead.last_name}`}</Td>
							<Td>{lead.email}</Td>
							<Td>{lead.address}</Td>
							<Td>{lead.phone}</Td>
							<Td>
								<Tag
									colorScheme={lead.agent ? 'cyan' : 'red'}
									size="sm"
								>
									{lead.agent ? 'Assigned' : 'Unassigned'}
								</Tag>
							</Td>
							<Td>
								{lead.agent
									? lead.agent.user.first_name
									: 'No yet assigned'}
							</Td>
							<Td>
								<Link as={ReactRouterLink}>Edit</Link>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
