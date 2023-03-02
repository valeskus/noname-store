export const getCartProducts = () => {
	const product = JSON.parse(localStorage.getItem('product'));
	console.log(product);
	return new Promise((resolve, reject) => {
		return resolve({ result: product });
	});
};

export const setCartProduct = (product) => {
	localStorage.setItem('product', JSON.stringify(product));
	return new Promise((resolve, reject) => {
		return resolve({ result: product });
	});
};
