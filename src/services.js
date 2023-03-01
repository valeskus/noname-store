import { Client } from './api/client/Client';
import { getData, login, register } from './api/user.api';

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
		const res = await getData();

		Client.setToken(res.result);
		return res.result;
	},
};
