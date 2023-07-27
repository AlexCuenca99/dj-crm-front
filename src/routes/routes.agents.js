import { LeadsPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesAgents = [
	{
		path: '/users/leads',
		layout: MainLayout,
		component: LeadsPage,
	},
];

export default routesAgents;
