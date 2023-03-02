import * as Types from './actionTypes';

export function setCategory(data) {
	return {
		type: Types.SET_CATEGORIES,
		payload: data,
	};
}
