import React from 'react';
import { map } from 'lodash';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import routesMain from './routes.main';
import routesAgents from './routes.agents';
import routesOrganizers from './routes.organizers';
import { RequireAuth } from '../components/Main';

export function Navigation() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					{map(routesMain, (route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<route.layout>
									<route.component />
								</route.layout>
							}
						/>
					))}
				</Route>
				<Route element={<RequireAuth allowedRoles={['AGT', 'ORG']} />}>
					{map(routesAgents, (route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<route.layout>
									<route.component />
								</route.layout>
							}
						/>
					))}
				</Route>
				<Route element={<RequireAuth allowedRoles={['ORG']} />}>
					{map(routesOrganizers, (route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<route.layout>
									<route.component />
								</route.layout>
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
