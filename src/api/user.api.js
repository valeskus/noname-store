export const login = (data) => {
	return new Promise((resolve, reject) => {
		if (data.email === 'UserOne@gmail.com' && data.password === 'UserOne') {
			return resolve({
				result: 'token1',
			});
		}

		return reject('error: no authorised');
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
