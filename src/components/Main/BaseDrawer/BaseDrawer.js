import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
} from '@chakra-ui/react';

import { CustomAlertDialog } from '../index';
import { isEmpty } from 'lodash';

export function BaseDrawer(props) {
	const {
		loading,
		size,
		title,
		drawerDisclosure,
		children,
		alertTitle,
		alertBody,
		alertMainActionTitle,
		alertMainActionColor,
		formik,
		alertDialogDisclosure,
	} = props;

	// const { isOpen, onClose, onOpen } = useDisclosure();

	const handleFormValidation = async () => {
		try {
			await formik.validateForm();
			if (isEmpty(formik.errors)) alertDialogDisclosure.onOpen();
		} catch (error) {}
	};

	return (
		<>
			<Drawer
				isOpen={drawerDisclosure.isOpen}
				placement="right"
				onClose={drawerDisclosure.onClose}
				size={size}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>{title}</DrawerHeader>
					<DrawerBody>{children}</DrawerBody>
					<DrawerFooter>
						<Button
							isDisabled={loading}
							variant="outline"
							mr={3}
							onClick={drawerDisclosure.onClose}
						>
							Cancel
						</Button>
						<Button
							onClick={handleFormValidation}
							isLoading={loading}
							colorScheme="blue"
						>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<CustomAlertDialog
				loading={loading}
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

BaseDrawer.defaultProps = {
	size: 'xs',
};
