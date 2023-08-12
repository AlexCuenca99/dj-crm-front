import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { UnassignedLeadsCard } from '../index';
import { map } from 'lodash';

export function UnassignedLeadsCards(props) {
	const { leads } = props;

	return (
		<SimpleGrid spacing={5} columns={4}>
			{map(leads, (lead, _) => (
				<UnassignedLeadsCard
					key={lead.id}
					fullName={`${lead.first_name} ${lead.last_name}`}
					id={lead.id}
				/>
			))}
		</SimpleGrid>
	);
}
