import * as Types from './actionTypes';

const initialState = [];

export function cartProductsReducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_CARTPRODUCT: {
			return [...state, action.payload];
		}
		case Types.SET_CARTPRODUCTS: {
			return action.payload;
		}
		case Types.DEL_CARTPRODUCT: {
			const filteredCartProducts = state.filter(
				(product) => !product.id.includes(action.payload)
			);

			return filteredCartProducts;
		}

		default: {
			return state;
		}
	}
}
