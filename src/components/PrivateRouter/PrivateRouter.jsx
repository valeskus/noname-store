import React from 'react';

import { Navigate } from 'react-router-dom';

import { Client } from '../../api/client/Client';

export const PrivateRoute = ({ redirectPath, children, isAllowed }) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
