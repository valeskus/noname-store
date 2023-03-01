import * as Types from './actionTypes';

const initialState = [];

export function productsReducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_PRODUCTS: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
}
