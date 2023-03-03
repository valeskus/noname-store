import React from 'react';

import { Navigate } from 'react-router-dom';

import { Client } from '../../api/client/Client';

export const PrivateRoute = ({ redirectPath, children, isAuth }) => {
	console.log(isAuth);
	const token = Client.getToken();

	if (!token) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
