import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { LoginPage } from './pages/LoginPage';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductPage';
import { AccountPage } from './pages/AccountPage';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header';
import { CartPage } from './pages/CartPage';
import { Footer } from './components/Footer';
import { PrivateRoute } from './components/PrivateRouter';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './store/user/selectors';
import { Client } from './api/client/Client';
import { putToken, setUser } from './store/user/actionCreators';
import { UserService } from './services';

function App() {
	const [isAuth, setIsAuth] = useState();
	const user = useSelector(getUser);
	console.log(user);
	const dispatch = useDispatch();

	React.useEffect(() => {
		UserService.getUserData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setUser(data));
		}, []);
	}, []);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/productList' element={<ProductListPage />} />
				<Route path='/productList/:productId' element={<ProductPage />} />
				<Route
					path='/account'
					element={
						<PrivateRoute redirectPath='/login' isAllowed={!!isAuth}>
							<AccountPage />
						</PrivateRoute>
					}
				/>
				<Route
					path='/cart'
					element={
						<PrivateRoute redirectPath='/login'>
							<CartPage />
						</PrivateRoute>
					}
				/>
				<Route path='/main' element={<MainPage />} />
				<Route path='*' element={<ProductListPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
