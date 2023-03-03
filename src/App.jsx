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
import CircularProgress from '@mui/material/CircularProgress';

import { getUser } from './store/user/selectors';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseApp';

function App() {
	const [user, loading, error] = useAuthState(auth);

	console.log(user?.email);

	if (loading) {
		return (
			<div className='loader-container'>
				<CircularProgress />
			</div>
		);
	}

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
						<PrivateRoute redirectPath='/login' isAllowed={!!user}>
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
