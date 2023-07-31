import React from 'react';
import { map } from 'lodash';
import {
	IconButton,
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
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

export function LeadsTable(props) {
	const { leads } = props;

	return (
		<TableContainer>
			<Table variant="simple" size="sm">
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
							<Actions lead={lead} />
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

function Actions(props) {
	const { lead } = props;

	return (
		<Td>
			<IconButton
				aria-label="Edit lead"
				icon={<FiEdit2 size={17} />}
				onClick={() => console.log('Edit', lead.first_name)}
			/>
			<IconButton
				aria-label="Delete lead"
				icon={<RiDeleteBin5Line size={17} />}
				onClick={() => console.log('Edit', lead.first_name)}
			/>
		</Td>
	);
}
