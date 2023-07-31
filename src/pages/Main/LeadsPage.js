import React, { useEffect, useState } from 'react';

import { filter, isEmpty } from 'lodash';
import {
	Alert,
	AlertIcon,
	Spinner,
	StackDivider,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';

import { useLeads } from '../../hooks';
import { HeaderPage, UnassignedLeadsCards } from '../../components/Main';
import {
	AddEditLeadsForm,
	LeadsTable,
	BaseDrawer,
} from '../../components/Main';

export function LeadsPage() {
	const { loading, error, leads, getLeads } = useLeads();
	const { onOpen, isOpen, onClose } = useDisclosure();
	const [drawerTitle, setDrawerTitle] = useState(null);
	const [drawerContent, setDrawerContent] = useState(null);
	const [alertTitle, setAlertTitle] = useState(null);
	const [alertBody, setAlertBody] = useState(null);
	const [alertMainActionTitle, setAlertMainActionTitle] = useState(null);
	const [alertMainActionColor, setAlertMainActionColor] = useState(null);

	useEffect(() => {
		getLeads();
	}, []);

	// Filter unassigned leads from server request
	const unassignedLeads = filter(leads, { agent: null });

	// Create a new Lead
	const addLead = () => {
		setDrawerTitle('Create a new lead');
		setDrawerContent(<AddEditLeadsForm />);
		setAlertTitle('Create lead?');
		setAlertBody(
			'Are you sure you want to create a new lead with entered data?'
		);
		setAlertMainActionTitle('Create');
		setAlertMainActionColor('blue');
		onOpen();
	};

	return (
		<>
			<HeaderPage
				title={'Leads'}
				action={addLead}
				useDisclosure={useDisclosure}
				actionTitle={'Create a new lead'}
				action2={() => console.log('Action 2')}
				actionTitle2={'Filter by category'}
			/>
			{loading ? (
				<Spinner />
			) : isEmpty(leads) ? (
				<Alert status="warning">
					<AlertIcon />
					There is not any lead to show
				</Alert>
			) : (
				<VStack
					divider={<StackDivider />}
					spacing={5}
					alignItems="start"
				>
					<LeadsTable leads={leads} />
					<UnassignedLeadsCards leads={unassignedLeads} />
				</VStack>
			)}
			<BaseDrawer
				loading={loading}
				size={'sm'}
				title={drawerTitle}
				isOpenDrawer={isOpen}
				onCloseDrawer={onClose}
				children={drawerContent}
				action1={() => console.log('Created lead')}
				alertTitle={alertTitle}
				alertBody={alertBody}
				alertMainActionTitle={alertMainActionTitle}
				alertMainActionColor={alertMainActionColor}
			/>
		</>
	);
}
