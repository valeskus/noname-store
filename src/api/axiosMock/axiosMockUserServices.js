import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockedUsers } from '../../components/constants';

const mock = new AxiosMockAdapter(axios);

mock.onGet('/users').reply(200, {
	user: [{ id: 1, name: 'John Smith' }],
});

//login
mock.onPost('/login').reply((config) => {
	const data = JSON.parse(config.data);

	const currentUser = mockedUsers.find((user) => {
		return user.email === data.email && user.password === data.password;
	});

	if (currentUser) {
		return [200];
	}

	return [400];
});

export function loginUser(data) {
	console.log(data);
	axios.post('/login', data).then(function (response) {
		console.log(response);
	});
}

export function getUser() {
	axios.get('/users').then(function (response) {
		console.log(response.data);
	});
}
