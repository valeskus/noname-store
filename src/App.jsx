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
import CircularProgress from '@mui/material/CircularProgress';

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
			<Header user={user} />
			<Routes>
				<Route
					path='/login'
					element={
						<PrivateRoute redirectPath='/main' isAllowed={!user}>
							<LoginPage />
						</PrivateRoute>
					}
				/>
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
						<PrivateRoute redirectPath='/login' isAllowed={!!user}>
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
