import { mockedProducts } from '../constants';

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		return resolve({ result: mockedProducts });
	});
};

export const getProduct = (id) => {
	const product = mockedProducts.find((product) => {
		return product.id === id;
	});
	return new Promise((resolve, reject) => {
		return resolve({ result: product });
	});
};
