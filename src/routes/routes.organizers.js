import {
	LeadsDetailsPage,
	LeadsPage,
	AgentsPage,
	AgentDetailsPage,
} from '../pages/Main';
import { MainLayout } from '../layouts';

const routesOrganizers = [
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
	{
		path: '/users/agents',
		layout: MainLayout,
		component: AgentsPage,
	},
	{
		path: '/users/agents/:id',
		layout: MainLayout,
		component: AgentDetailsPage,
	},
];

export default routesOrganizers;
