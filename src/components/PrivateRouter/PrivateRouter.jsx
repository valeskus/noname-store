import React from 'react';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isAllowed, redirectPath, children }) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
