import * as Redux from 'redux';

import { userReducer } from './user/reducer';
import { productsReducer } from './products/reducer';
import { categoriesReducer } from './categories/reducer';

const rootReducer = Redux.combineReducers({
	user: userReducer,
	products: productsReducer,
	categories: categoriesReducer,
});

export const rootStore = Redux.createStore(rootReducer);
