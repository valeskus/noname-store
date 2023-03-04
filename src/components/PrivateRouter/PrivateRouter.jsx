import React from 'react';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectPath, children, isAllowed }) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
