import React from 'react';
import { Stack } from '@chakra-ui/react';

import { UnassignedLeadsCard } from '../index';
import { map } from 'lodash';

export function UnassignedLeadsCards(props) {
	const { leads } = props;

	return (
		<Stack spacing={8} direction="row">
			{map(leads, (lead, _) => (
				<UnassignedLeadsCard
					fullName={`${lead.first_name} ${lead.last_name}`}
					id={lead.id}
				/>
			))}
		</Stack>
	);
}
