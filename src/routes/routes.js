import { Error404 } from '../pages';
import routerMain from './routes.main';
import { BasicLayout } from '../layouts';

const routes = [
	...routerMain,
	{ path: '*', layout: BasicLayout, component: Error404 },
];

export default routes;
