import * as Types from './actionTypes';

export function setUser(user) {
	return {
		type: Types.SET_USER,
		payload: user,
	};
}

export function putToken(token) {
	return {
		type: Types.PUT_TOKEN,
		payload: {
			token,
		},
	};
}

export function removeToken() {
	return {
		type: Types.REMOVE_TOKEN,
		payload: {},
	};
}
