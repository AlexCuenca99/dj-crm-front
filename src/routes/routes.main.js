import { MainLayout } from '../layouts';
import { Login } from '../pages/Main';

const routesMain = [
	{
		path: '/',
		layout: MainLayout,
		component: Login,
	},
];

export default routesMain;
