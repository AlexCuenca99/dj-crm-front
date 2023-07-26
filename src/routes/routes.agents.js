import { HomeAuthPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesAgents = [
	{
		path: '/users/leads',
		layout: MainLayout,
		component: HomeAuthPage,
	},
];

export default routesAgents;
