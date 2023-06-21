import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';

function App() {
	const [token, setToken] = useState(false);

	useEffect(() => {
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) {
			setToken(true);
		}
	}, [token]);
	return (
		<>
			{token ? (
				<Navigate to="/todos" replace />
			) : (
				<Navigate to="/signin" replace />
			)}
			<Outlet />
		</>
	);
}

export default App;
