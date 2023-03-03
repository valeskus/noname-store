import { Client } from './api/client/Client';
import { getUserData, login, register } from './api/user.api';
import { getProduct, getProducts } from './api/products.api';
import { getCategoryData } from './api/categories.api';
import { getCartProducts, resetCart } from './api/cart.api';
import { setCartProduct } from './api/cart.api';

export const UserService = {
	async registerUser(data) {
		const res = await register(data);
		console.log(res);
		return res.result;
	},

	async loginUser(data) {
		const res = await login(data);
		Client.setToken(res.result.token);
		console.log(res.result);

		return res.result;
	},
	async getUserData() {
		const res = await getUserData();
		return res.result;
	},
};

export const ProductService = {
	async getProductsData() {
		const res = await getProducts();
		return res.result;
	},
	async getProductById(id) {
		const res = await getProduct(id);
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
	async setCartProduct(product) {
		const res = await setCartProduct(product);
		return res.result;
	},
	async delCartProducts() {
		const res = await resetCart();
		return res.result;
	},
};
