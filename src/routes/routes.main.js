import { Error404 } from '../pages';
import { Unauthorized, Forbidden } from '../components/Main';
import { LoginPage, HomeAuthPage } from '../pages/Main';
import { MainLayout, BasicLayout } from '../layouts';

const routesMain = [
	{
		path: '/login',
		layout: MainLayout,
		component: LoginPage,
	},
	{
		path: '/',
		layout: MainLayout,
		component: HomeAuthPage,
	},
	{
		path: '/users/me',
		layout: MainLayout,
		component: HomeAuthPage,
	},
	{
		path: '/forbidden',
		layout: MainLayout,
		component: Forbidden,
	},
	{
		path: '/unauthorized',
		layout: BasicLayout,
		component: Unauthorized,
	},
	{ path: '*', layout: BasicLayout, component: Error404 },
];

export default routesMain;
