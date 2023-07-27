import { LeadsDetailsPage, LeadsPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesAgents = [
	{
		path: '/users/leads',
		layout: MainLayout,
		component: LeadsPage,
	},
	{
		path: '/users/leads/:id',
		layout: MainLayout,
		component: LeadsDetailsPage,
	},
];

export default routesAgents;
