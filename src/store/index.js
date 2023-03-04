import * as Redux from 'redux';

import { productsReducer } from './products/reducer';
import { categoriesReducer } from './categories/reducer';
import { cartProductsReducer } from './cart/reducer';

const rootReducer = Redux.combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	cart: cartProductsReducer,
});

export const rootStore = Redux.createStore(rootReducer);
