import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, useDisclosure } from '@chakra-ui/react';

import { useAgent } from 'hooks';
import { AddEditAgentForm } from 'components/Main';

export function AgentDetailsPage() {
	const { loading, agent, error, getAgentById } = useAgent();

	let { id } = useParams();
	const alertDialogDisclosure = useDisclosure();

	const [formik, setFormik] = useState(null);
	const [formLoading, setFormLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);

	const [showToast, setShowToast] = useState(false);
	const [toastTitle, setToastTitle] = useState(null);
	const [toastDescription, setToastDescription] = useState(null);
	const [toastStatus, setToastStatus] = useState(null);
	const [toastDuration, setToastDuration] = useState(null);
	const [toastIsClosable, setToastIsClosable] = useState(false);
	const toastId = 'custom-toast';

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
				<AddEditAgentForm
					agent={agent}
					setFormik={setFormik}
					// onCloseDrawer={null}
					// onCloseAlertDialog={alertDialogDisclosure.onClose}
					// setShowToast={setShowToast}
					setFormLoading={setFormLoading}
					// setToastTitle={setToastTitle}
					// setToastDescription={setToastDescription}
					// setToastStatus={setToastStatus}
					// setToastDuration={setToastDuration}
					// setToastIsClosable={setToastIsClosable}
					onRefetch={onRefetch}
				/>
			)}
		</>
	);
}
