import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Registration } from './components/Registration';
import { LoginPage } from './components/LoginPage';
import { ProductListPage } from './components/ProductListPage';
import { ProductPage } from './components/ProductPage';
import { AccountPage } from './components/AccountPage';
import { MainPage } from './components/MainPage';
import { Header } from './components/Header';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';
import { PrivateRoute } from './components/PrivateRouter';

function App() {
	const { isAuth, setisAuth } = useState(false);

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
						<PrivateRoute redirectPath='/login' isAllowed={!!isAuth}>
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
