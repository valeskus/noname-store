import * as Types from './actionTypes';

export function setCartProduct(data) {
	return {
		type: Types.SET_CARTPRODUCT,
		payload: data,
	};
}

export function setCartProducts(data) {
	return {
		type: Types.SET_CARTPRODUCTS,
		payload: data,
	};
}

export function delCartProduct(id) {
	return {
		type: Types.DEL_CARTPRODUCT,
		payload: id,
	};
}
