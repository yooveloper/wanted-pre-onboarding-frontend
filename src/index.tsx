import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
	Navigate
} from 'react-router-dom';
import NotFound from '@pages/NotFound';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import Todo from '@pages/Todo';
import App from './App';

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/signin',
				element: (
					<IsAuthRoute>
						<SignIn />
					</IsAuthRoute>
				)
			},
			{
				path: '/signup',
				element: (
					<IsAuthRoute>
						<SignUp />
					</IsAuthRoute>
				)
			},
			{
				path: '/todos',
				element: (
					<IsNotAuthRoute>
						<Todo />
					</IsNotAuthRoute>
				)
			}
		]
	}
]);

function IsAuthRoute({ children }: { children: JSX.Element }) {
	const accessToken = localStorage.getItem('access_token');
	if (accessToken) {
		return <Navigate to="/todos" replace />;
	}

	return children;
}

function IsNotAuthRoute({ children }: { children: JSX.Element }) {
	const accessToken = localStorage.getItem('access_token');

	if (!accessToken) {
		return <Navigate to="/signin" replace />;
	}
	return children;
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
