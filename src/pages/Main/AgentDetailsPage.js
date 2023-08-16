import React, { useEffect, useState, useRef } from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Spinner,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import { useAgent } from 'hooks';
import { AssignedLeadsTable } from 'components/Main';

export function AgentDetailsPage() {
	const { loading, getMyLeads, myLeads, updateMyLead } = useAgent();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const cancelRef = useRef();
	const [refetch, setRefetch] = useState(false);
	const [categoryValue, setCategoryValue] = useState({});
	const [leadId, setLeadId] = useState('');

	useEffect(() => {
		document.title = 'Agent Details';
	}, []);

	useEffect(() => {
		getMyLeads();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refetch]);

	const onRefetch = () => {
		setRefetch((prev) => !prev);
	};

	const handleCategoryChange = (e, lead) => {
		onOpen();
		setCategoryValue({ category: e.target.value });
		setLeadId(lead.id);
	};

	const handleUpdateCategoryLead = async () => {
		try {
			await updateMyLead(leadId, categoryValue);
			toast({
				title: 'Account created.',
				description: "We've created your account for you.",
				status: 'success',
				duration: 9000,
				isClosable: true,
			});
			onClose();
			onRefetch();
		} catch (error) {
			toast({
				title: 'Something went wrong.',
				description: "We've not updated your lead for you.",
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
			onClose();
		}
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
							<AssignedLeadsTable
								leads={myLeads}
								handleCategoryChange={handleCategoryChange}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			)}

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Change lead status
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You'll change your assigned lead
							status. Your organizer will be emailed about the
							operation.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="teal"
								onClick={handleUpdateCategoryLead}
								ml={3}
							>
								Change status
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}
