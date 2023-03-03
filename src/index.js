import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { rootStore } from './store';
import './index.css';
import App from './App';

import './firebaseApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={rootStore}>
			<App />
		</Provider>
	</React.StrictMode>
);
