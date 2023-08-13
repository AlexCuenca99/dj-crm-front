import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Spinner,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';

import { useAgent } from 'hooks';
import { AssignedLeadsTable } from 'components/Main';

export function AgentDetailsPage() {
	const { loading, agent, error, getAgentById } = useAgent();

	const { id } = useParams();

	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		getAgentById(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refetch]);

	const onRefetch = () => {
		setRefetch((prev) => !prev);
	};

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<Tabs isFitted variant="enclosed">
					<TabList>
						<Tab>My assigned leads</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<AssignedLeadsTable leads={[]} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			)}
		</>
	);
}
