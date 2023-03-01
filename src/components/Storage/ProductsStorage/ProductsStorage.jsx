import React from 'react';

import { mockedProducts } from '../../constans';

export const ProductsContext = React.createContext({
	courses: [],
	setCourses: () => undefined,
});

export function ProductsStorage({ children }) {
	const [products, setProducts] = React.useState(mockedProducts);

	const context = {
		products,
		setProducts,
	};

	return (
		<ProductsContext.Provider value={context}>
			{children}
		</ProductsContext.Provider>
	);
}
