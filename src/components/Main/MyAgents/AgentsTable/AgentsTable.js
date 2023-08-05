import React from 'react';
import { map } from 'lodash';
import {
	Avatar,
	IconButton,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export function AgentsTable(props) {
	const { agents } = props;
	return (
		<TableContainer>
			<Table variant="simple" size="sm">
				<TableCaption>Agent users</TableCaption>
				<Thead>
					<Tr>
						<Th></Th>
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
							<Td>
								{
									<Avatar
										name={`${agent.user.first_name}${agent.user.last_name}`}
										src={agent.user.photo}
									/>
								}
							</Td>
							<Td>{`${agent.user.first_name} ${agent.user.last_name}`}</Td>
							<Td>{agent.user.email}</Td>
							<Td>{agent.user.address}</Td>
							<Td>{agent.user.phone}</Td>
							<Actions agent={agent} />
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

function Actions(props) {
	const { agent } = props;

	return (
		<Td>
			<IconButton
				aria-label="See details"
				icon={<FiArrowRight size={17} />}
				onClick={() =>
					console.log('See details of ', agent.user.first_name)
				}
			/>
		</Td>
	);
}
