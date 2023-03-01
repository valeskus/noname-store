import * as Types from './actionTypes';

const initialState = {
	isAuth: false,
	email: '',
	name: '',
	token: '',
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_USER: {
			const { email, name } = action.payload;

			return {
				...state,
				email,
				name,
			};
		}
		case Types.PUT_TOKEN: {
			const { token } = action.payload;

			return {
				...state,
				token,
				isAuth: true,
			};
		}
		case Types.REMOVE_TOKEN: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
