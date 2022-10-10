import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { IRoute } from '../interfaces';
import HomePage from '../pages/HomePage';

export const routePaths = {
	home: '/',
};

export const routes: IRoute[] = [
	{
		path: routePaths.home,
		Component: HomePage,
		isPrivateRoute: false,
	},
];

export const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			{routes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}

			<Route path='*' element={<Navigate to={routePaths.home} />} />
		</Routes>
	</BrowserRouter>
);
