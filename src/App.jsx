import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

const App = () => {
	return (
		<div>
			<Routes>
				{/* this will take us to home when we are at / */}
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Routes>
		</div>
	);
};

export default App;
