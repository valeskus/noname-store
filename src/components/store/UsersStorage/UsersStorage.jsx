import React from 'react';

import { mockedUsers } from '../../components/constants';

export const UsersContext = React.createContext({
	users: [],
	setUsers: () => undefined,
});

export function UsersStorage({ children }) {
	const [users, setUsers] = React.useState(mockedUsers);

	const context = {
		users,
		setUsers,
	};

	return (
		<UsersContext.Provider value={context}>{children}</UsersContext.Provider>
	);
}
