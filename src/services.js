import { Client } from './api/client/Client';
import { getUserData, login, register } from './api/user.api';
import { getData } from './api/products.api';
import { getCategoryData } from './api/categories.api';
import { getCartProducts } from './api/cart.api';
import { setCartProduct } from './api/cart.api';

export const UserService = {
	async registerUser(data) {
		const res = await register(data);
		console.log(res);
		return res.result;
	},

	async loginUser(data) {
		const res = await login(data);

		Client.setToken(res.result);
		return res.result;
	},
	async getUserData() {
		const res = await getUserData();
		return res.result;
	},
};

export const ProductService = {
	async getProductData() {
		const res = await getData();
		return res.result;
	},
};

export const CategoryService = {
	async getCategoryData() {
		const res = await getCategoryData();
		return res.result;
	},
};

export const CartProductsService = {
	async getCartProducts() {
		const res = await getCartProducts();
		return res.result;
	},
	async setCartProducts(product) {
		const res = await setCartProduct(product);
		return res.result;
	},
};
