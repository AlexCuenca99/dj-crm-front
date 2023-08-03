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
		action,
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
							onClick={action}
							colorScheme={mainActionColor}
							isLoading={loading}
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
