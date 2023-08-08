import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAgent } from 'hooks';
import { AddEditAgentForm } from 'components/Main';

export function AgentDetailsPage() {
	const { loading, agent, error, getAgentById } = useAgent();

	let { id } = useParams();

	const [formik, setFormik] = useState(null);
	const [formLoading, setFormLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);

	const onRefetch = () => {
		setRefetch((prev) => !prev);
	};

	useEffect(() => {
		getAgentById(id);
	}, []);

	return (
		<>
			<AddEditAgentForm
				agent={agent}
				setFormik={setFormik}
				// onCloseDrawer={drawerDisclosure.onClose}
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
		</>
	);
}
