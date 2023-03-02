import * as Types from './actionTypes';

const initialState = [];

export function categoriesReducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_CATEGORIES: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
}
