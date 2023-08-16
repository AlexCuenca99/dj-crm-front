import { AgentDetailsPage, LeadsPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesAgents = [
	{
		path: '/users/leads',
		layout: MainLayout,
		component: LeadsPage,
	},
	{
		path: '/leads/my-assignments',
		layout: MainLayout,
		component: AgentDetailsPage,
	},
];

export default routesAgents;
