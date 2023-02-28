import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Registration } from './components/Registration';
import { LoginPage } from './components/LoginPage';
import { ProductListPage } from './components/ProductListPage';
import { ProductPage } from './components/ProductPage';
import { AccountPage } from './components/AccountPage';
import { BinPage } from './components/BinPage';
import { MainPage } from './components/MainPage';
import { Header } from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/productList' element={<ProductListPage />} />
				<Route path='/productList/:productId' element={<ProductPage />} />
				<Route path='/account' element={<AccountPage />} />
				<Route path='/bin' element={<BinPage />} />
				<Route path='/main' element={<MainPage />} />
				<Route path='*' element={<ProductListPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
