import * as Redux from 'redux';

import { userReducer } from './user/reducer';
import { productsReducer } from './products/reducer';
import { categoriesReducer } from './categories/reducer';
import { cartProductsReducer } from './cart/reducer';

const rootReducer = Redux.combineReducers({
	user: userReducer,
	products: productsReducer,
	categories: categoriesReducer,
	cart: cartProductsReducer,
});

export const rootStore = Redux.createStore(rootReducer);
