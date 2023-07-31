import React from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogCloseButton,
	Button,
} from '@chakra-ui/react';

export function CustomAlertDialog(props) {
	const {
		loading,
		title,
		body,
		mainActionTitle,
		mainActionColor,
		isOpenAlert,
		onCloseAlert,
	} = props;

	return (
		<AlertDialog
			isOpen={isOpenAlert}
			onClose={onCloseAlert}
			motionPreset="slideInBottom"
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						{title}
					</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>{body}</AlertDialogBody>

					<AlertDialogFooter>
						<Button onClick={onCloseAlert} isDisabled={loading}>
							Cancel
						</Button>
						<Button
							form="leads-form"
							type="submit"
							colorScheme={mainActionColor}
							isLoading={loading}
							//onClick={onCloseAlert}
							ml={3}
						>
							{mainActionTitle}
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}
