const cartUpdate = (product) => {
	const productList = localStorage.getItem('product')
		? JSON.parse(localStorage.getItem('product'))
		: [];

	productList.push(product);
	return JSON.stringify(productList);
};

export const getCartProducts = () => {
	const products = JSON.parse(localStorage.getItem('product'));
	return new Promise((resolve, reject) => {
		return resolve({ result: products });
	});
};

export const setCartProduct = (product) => {
	const productJSON = cartUpdate(product);

	localStorage.setItem('product', productJSON);
	return new Promise((resolve, reject) => {
		return resolve({ result: product });
	});
};

export const resetCart = (product) => {
	localStorage.removeItem('product');
	return new Promise((resolve, reject) => {
		return resolve({ result: 'succes' });
	});
};
