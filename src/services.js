import { Client } from './api/client/Client';
import { login } from './api/user.api';

export const UserService = {
	// async registerUser(user) {
	// 	await ClientInstance.post('/register', user);
	// },

	async loginUser(data) {
		const res = await login(data);

		Client.setToken(res.result);
		return res.result;
	},
};
