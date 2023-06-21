import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import Todo from '@pages/Todo';
import { SIGNUP, TODOS } from '@constants/index';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <SignIn /> },
			{ path: SIGNUP, element: <SignUp /> },
			{ path: TODOS, element: <Todo /> }
		]
	}
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
