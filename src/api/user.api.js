export const login = (username, password) => {
	return new Promise((resolve, reject) => {
		if (username === '' && password === '') {
			return resolve({
				token: '',
			});
		}

		return reject({
			error: 'no authorised',
		});
	});
};

export const register = ({ email, password }) => {
	return new Promise((resolve, reject) => {
		if (email.test(/g/)) {
			return reject({
				message: 'sdfsdf',
			});
		}

		resolve();
	});
};
