import { Client } from './api/client/Client';
import { login, register } from './api/user.api';
import { getData } from './api/products.api';

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
};

export const ProductService = {
	async getProductData() {
		const res = await getData();
		return res.result;
	},
};
