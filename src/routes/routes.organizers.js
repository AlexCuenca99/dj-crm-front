import { HomeAuthPage, LeadsPage } from '../pages/Main';
import { MainLayout } from '../layouts';

const routesOrganizers = [
	{
		path: '/users/leads',
		layout: MainLayout,
		component: LeadsPage,
	},
	{
		path: '/users/agents',
		layout: MainLayout,
		component: HomeAuthPage,
	},
];

export default routesOrganizers;
