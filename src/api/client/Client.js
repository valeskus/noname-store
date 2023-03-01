export class Client {
	static getToken = () => {
		return localStorage.getItem('JWT');
	};

	static removeToken = () => {
		localStorage.removeItem('JWT');
	};

	static setToken = (token) => {
		localStorage.setItem('JWT', token);
	};
}

export const ClientInstance = new Client();
