import React from 'react';

import { Navigate } from 'react-router-dom';

import { Client } from '../../api/client/Client';

export const PrivateRoute = ({ redirectPath, children, isAllowed }) => {
	console.log(isAllowed);
	// const token = Client.getToken();

	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
