import React from 'react';

import { mockedCategories } from '../../constans';

export const CategoriesContext = React.createContext({
	courses: [],
	setCourses: () => undefined,
});

export function CategoriesStorage({ children }) {
	const [categories, setCategories] = React.useState(mockedCategories);

	const context = {
		categories,
		setCategories,
	};

	return (
		<CategoriesContext.Provider value={context}>
			{children}
		</CategoriesContext.Provider>
	);
}
