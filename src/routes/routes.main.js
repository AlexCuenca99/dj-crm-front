import { LoginPage, HomeAuthPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesMain = [
	{
		path: '/',
		layout: MainLayout,
		component: LoginPage,
	},
	{
		path: '/leads',
		layout: MainLayout,
		component: HomeAuthPage,
	},
	{
		path: '/agents',
		layout: MainLayout,
		component: HomeAuthPage,
	},
];

export default routesMain;
