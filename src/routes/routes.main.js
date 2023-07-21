import { Login } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesMain = [
	{
		path: '/',
		layout: MainLayout,
		component: Login,
	},
];

export default routesMain;
