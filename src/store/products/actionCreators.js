import * as Types from './actionTypes';

export function setProducts(data) {
	return {
		type: Types.SET_PRODUCTS,
		payload: data,
	};
}
