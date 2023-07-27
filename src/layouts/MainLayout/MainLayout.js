import React from 'react';

import { useAuth } from '../../hooks';
import { LoginPage } from '../../pages/Main';
import {
	IconButton,
	Avatar,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	Icon,
	useColorModeValue,
	Text,
	Drawer,
	DrawerContent,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	DrawerOverlay,
} from '@chakra-ui/react';
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiSettings,
	FiMenu,
	FiChevronDown,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const LinkItems = [
	{ name: 'Home', icon: FiHome, link: '/' },
	{ name: 'Leads', icon: FiTrendingUp, link: '/users/leads' },
	{ name: 'Agents', icon: FiCompass, link: '/users/agents' },
	{ name: 'Settings', icon: FiSettings, link: '/settings' },
];

const SidebarContent = ({ onClose, ...rest }) => {
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex
				h="20"
				alignItems="center"
				mx="8"
				justifyContent="space-between"
			>
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
				<CloseButton
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
				/>
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon} link={link.link}>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

const NavItem = ({ link, icon, children, ...rest }) => {
	return (
		<Box
			as="a"
			href={link}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'cyan.400',
					color: 'white',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Box>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	const { auth, logout } = useAuth();
	const navigate = useNavigate();
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
			>
				Logo
			</Text>

			<HStack spacing={{ base: '0', md: '6' }}>
				<Flex alignItems={'center'}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
								<Avatar size={'sm'} src={auth.me.photo} />
								<VStack
									display={{ base: 'none', md: 'flex' }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">{`${auth.me.first_name} ${auth.me.last_name}`}</Text>
									<Text fontSize="xs" color="gray.600">
										{auth.me.role}
									</Text>
								</VStack>
								<Box display={{ base: 'none', md: 'flex' }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue('white', 'gray.900')}
							borderColor={useColorModeValue(
								'gray.200',
								'gray.700'
							)}
						>
							<MenuItem onClick={() => navigate('/users/me')}>
								Profile
							</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuDivider />
							<MenuItem onClick={logout}>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export function MainLayout(props) {
	const { auth } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const colorModeValue = useColorModeValue('gray.100', 'gray.900');

	const { children } = props;

	if (!auth) return <LoginPage />;

	return (
		<Box minH="100vh" bg={colorModeValue}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerOverlay />
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>

			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />

			{/* Main Content */}
			<Box ml={{ base: 0, md: 60 }} p="10">
				{children}
			</Box>
		</Box>
	);
}
