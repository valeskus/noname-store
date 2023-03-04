import React from 'react';
import './AccountPage.style.css';
import { UserService } from '../../services';
import { OrderHistory } from './components/OrderHistory';
import Avatar from '@mui/material/Avatar';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export function AccountPage({ user }) {
	const navigate = useNavigate();

	async function handleLogout(event) {
		event.preventDefault();

		try {
			UserService.logoutUser().then((data) => {
				console.log('logout:', data);
			});

			navigate('/main');
		} catch (error) {
			alert(error);
		}
	}
	return (
		<div className='productListPage-container'>
			<div className='userData-container'>
				<Avatar alt='User Photo' sx={{ width: 100, height: 100, zIndex: -1 }} />
				<div className='userData-info'>
					<h1 id='accountPageUserName'>{user.email}</h1>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			</div>
			<OrderHistory />
		</div>
	);
}
