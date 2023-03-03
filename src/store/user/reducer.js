import * as Types from './actionTypes';

const initialState = {
	isAuth: false,
	email: '',
	name: '',
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_USER: {
			const { email, name } = action.payload;

			return {
				...state,
				email,
				name,
				isAuth: true,
			};
		}
		case Types.PUT_TOKEN: {
			const { token } = action.payload;

			return {
				...state,
				token,
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
