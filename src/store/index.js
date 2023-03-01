import * as Redux from 'redux';

import { userReducer } from './user/reducer';
import { productsReducer } from './products/reducer';

const rootReducer = Redux.combineReducers({
	user: userReducer,
	products: productsReducer,
});

export const rootStore = Redux.createStore(rootReducer);
