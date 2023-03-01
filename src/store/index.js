import * as Redux from 'redux';

import { userReducer } from './user/reducer';

const rootReducer = Redux.combineReducers({
	user: userReducer,
});

export const rootStore = Redux.createStore(rootReducer);
