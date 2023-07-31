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
	useDisclosure,
} from '@chakra-ui/react';

import { CustomAlertDialog } from '../index';

export function BaseDrawer(props) {
	const {
		loading,
		title,
		isOpenDrawer,
		onCloseDrawer,
		size,
		children,
		action1,
		alertTitle,
		alertBody,
		alertMainActionTitle,
		alertMainActionColor,
	} = props;

	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Drawer
				isOpen={isOpenDrawer}
				placement="right"
				onClose={onCloseDrawer}
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
							onClick={onCloseDrawer}
						>
							Cancel
						</Button>
						<Button
							onClick={onOpen}
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
				isOpenAlert={isOpen}
				onCloseAlert={onClose}
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
