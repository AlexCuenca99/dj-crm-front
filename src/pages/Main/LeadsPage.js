import React, { useEffect, useState } from 'react';

import { filter, isEmpty } from 'lodash';
import {
	Alert,
	AlertIcon,
	Spinner,
	StackDivider,
	VStack,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import { useLeads } from '../../hooks';
import {
	HeaderPage,
	UnassignedLeadsCards,
	AddEditLeadsForm,
	LeadsTable,
	BaseDrawer,
} from '../../components/Main';

export function LeadsPage() {
	const { loading, error, leads, getLeads } = useLeads();

	const toast = useToast();
	const drawerDisclosure = useDisclosure();
	const alertDialogDisclosure = useDisclosure();

	const [drawerTitle, setDrawerTitle] = useState(null);
	const [drawerContent, setDrawerContent] = useState(null);

	const [alertTitle, setAlertTitle] = useState(null);
	const [alertBody, setAlertBody] = useState(null);
	const [alertMainActionTitle, setAlertMainActionTitle] = useState(null);
	const [alertMainActionColor, setAlertMainActionColor] = useState(null);

	const [formik, setFormik] = useState(null);

	const [showToast, setShowToast] = useState(false);
	const toastId = 'custom-toast';

	useEffect(() => {
		getLeads();
	}, []);

	// Handle show Chakra Toast
	// Toast is only showing when state shoToast is true and is not active (avoid repeating)
	useEffect(() => {
		if (!toast.isActive(toastId) && showToast) {
			toast({
				toastId,
				title: 'Hola',
				description: 'Hola',
				status: 'success',
				duration: 8000,
				isClosable: true,
			});
		}

		// Return to false
		setShowToast(false);
	}, [toast, showToast]);

	// Filter unassigned leads from server request
	const unassignedLeads = filter(leads, { agent: null });

	// Create a new Lead
	const addLead = () => {
		setDrawerTitle('Create a new lead');
		setDrawerContent(
			<AddEditLeadsForm
				setFormik={setFormik}
				onCloseDrawer={drawerDisclosure.onClose}
				onCloseAlertDialog={alertDialogDisclosure.onClose}
				setShowToast={setShowToast}
			/>
		);
		setAlertTitle('Create lead?');
		setAlertBody(
			'Are you sure you want to create a new lead with entered data?'
		);
		setAlertMainActionTitle('Create');
		setAlertMainActionColor('blue');
		drawerDisclosure.onOpen();
	};

	return (
		<>
			<HeaderPage
				title={'Leads'}
				action={addLead}
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
				drawerDisclosure={drawerDisclosure}
				children={drawerContent}
				action1={() => console.log('Created lead')}
				alertTitle={alertTitle}
				alertBody={alertBody}
				alertMainActionTitle={alertMainActionTitle}
				alertMainActionColor={alertMainActionColor}
				formik={formik}
				alertDialogDisclosure={alertDialogDisclosure}
			/>
		</>
	);
}
