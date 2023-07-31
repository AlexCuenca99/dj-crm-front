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

export function BaseDrawer(props) {
	const { title, isOpen, onClose, size, children, action1 } = props;

	return (
		<Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>{title}</DrawerHeader>
				<DrawerBody>{children}</DrawerBody>
				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button form="leads-form" colorScheme="blue" type="submit">
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

BaseDrawer.defaultProps = {
	size: 'xs',
};
