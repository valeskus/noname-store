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

export const register = (data) => {
	return new Promise((resolve, reject) => {
		if (
			/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email) &&
			data.password.length > 5
		) {
			return resolve({
				result: {
					name: data.name,
					email: data.email,
					password: data.password,
				},
			});
		}
		return reject('error: something went wrong');
	});
};

export const getData = () => {
	return new Promise((resolve, reject) => {
		return resolve({
			name: 'UserOne',
			email: 'UserOne@gmail.com',
		});

		// return reject('error: something went wrong');
	});
};
