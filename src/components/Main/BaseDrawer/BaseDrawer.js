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
	const { title, useDisclosure } = props;
	const { isOpen, onClose } = useDisclosure();

	return (
		<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>{title}</DrawerHeader>
				<DrawerBody></DrawerBody>
				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button colorScheme="blue">Save</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
