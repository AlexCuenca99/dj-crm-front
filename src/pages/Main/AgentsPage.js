import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import {
	Alert,
	AlertIcon,
	ListItem,
	Spinner,
	StackDivider,
	UnorderedList,
	VStack,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import { useAgent } from 'hooks/useAgent';
import {
	HeaderPage,
	AgentsTable,
	BaseDrawer,
	AddEditAgentForm,
	CustomAlertDialog,
} from 'components/Main';

export function AgentsPage() {
	const { agents, loading, getAgents } = useAgent();

	const drawerDisclosure = useDisclosure();
	const alertDialogDisclosure = useDisclosure();
	const toast = useToast();

	const [formik, setFormik] = useState(null);
	const [formLoading, setFormLoading] = useState(false);

	const [drawerTitle, setDrawerTitle] = useState(null);
	const [drawerContent, setDrawerContent] = useState(null);

	const [alertTitle, setAlertTitle] = useState(null);
	const [alertBody, setAlertBody] = useState(null);
	const [alertMainActionTitle, setAlertMainActionTitle] = useState(null);
	const [alertMainActionColor, setAlertMainActionColor] = useState(null);

	const [showToast, setShowToast] = useState(false);
	const [toastTitle, setToastTitle] = useState(null);
	const [toastDescription, setToastDescription] = useState(null);
	const [toastStatus, setToastStatus] = useState(null);
	const [toastDuration, setToastDuration] = useState(null);
	const [toastIsClosable, setToastIsClosable] = useState(false);
	const toastId = 'custom-toast';

	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		getAgents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refetch]);

	// Handle show Chakra Toast
	// Toast is only showing when state showToast is true and is not active (avoid repeating)
	useEffect(() => {
		if (!toast.isActive(toastId) && showToast) {
			toast({
				toastId,
				title: toastTitle,
				description: (
					<UnorderedList>
						{map(toastDescription.cause, (entityErrors, _) =>
							map(entityErrors, (currentEntity, _) =>
								map(currentEntity, (currentError, index) => (
									<ListItem key={index}>
										{currentError}
									</ListItem>
								))
							)
						)}
					</UnorderedList>
				),
				status: toastStatus,
				duration: toastDuration,
				isClosable: toastIsClosable,
			});
		}

		// Return to false
		setShowToast(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toast, showToast]);

	const onRefetch = () => {
		setRefetch((prev) => !prev);
	};

	const addAgent = () => {
		setDrawerTitle('Create a new agent');
		setDrawerContent(
			<AddEditAgentForm
				setFormik={setFormik}
				onCloseDrawer={drawerDisclosure.onClose}
				onCloseAlertDialog={alertDialogDisclosure.onClose}
				setShowToast={setShowToast}
				setFormLoading={setFormLoading}
				setToastTitle={setToastTitle}
				setToastDescription={setToastDescription}
				setToastStatus={setToastStatus}
				setToastDuration={setToastDuration}
				setToastIsClosable={setToastIsClosable}
				onRefetch={onRefetch}
			/>
		);

		setAlertTitle('Create agent?');
		setAlertBody(
			'Are you sure you want to create a new agent with entered data?'
		);
		setAlertMainActionTitle('Create');
		setAlertMainActionColor('blue');
		drawerDisclosure.onOpen();
	};

	return (
		<>
			<HeaderPage
				title={'Agents'}
				action={addAgent}
				actionTitle={'Create a new agent'}
				action2={() => console.log('Action 2')}
				actionTitle2={'Filter by category'}
			/>
			{loading ? (
				<Spinner />
			) : isEmpty(agents) ? (
				<Alert status="warning">
					<AlertIcon />
					There is not any agent to show
				</Alert>
			) : (
				<VStack
					divider={<StackDivider />}
					spacing={5}
					alignItems="start"
				>
					<AgentsTable agents={agents} />
				</VStack>
			)}

			<BaseDrawer
				loading={formLoading}
				size={'sm'}
				title={drawerTitle}
				drawerDisclosure={drawerDisclosure}
				children={drawerContent}
				formik={formik}
				alertDialogDisclosure={alertDialogDisclosure}
			/>

			<CustomAlertDialog
				action={formik?.handleSubmit}
				loading={formLoading}
				isOpenAlert={alertDialogDisclosure.isOpen}
				onCloseAlert={alertDialogDisclosure.onClose}
				title={alertTitle}
				body={alertBody}
				mainActionTitle={alertMainActionTitle}
				mainActionColor={alertMainActionColor}
			/>
		</>
	);
}
