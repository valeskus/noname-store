import React, { useEffect } from 'react';
import './AccountPage.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserService } from '../../services';
import { removeToken, setUser } from '../../store/user/actionCreators';
import { getUser } from '../../store/user/selectors';
import { OrderHistory } from './components/OrderHistory';
import Avatar from '@mui/material/Avatar';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export function AccountPage() {
	const user = useSelector(getUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		UserService.getUserData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setUser(data));
		}, []);
		// eslint-disable-next-line
	}, []);

	async function handleLogout(event) {
		event.preventDefault();

		try {
			UserService.loginUser().then((data) => {
				dispatch(removeToken(data.token));
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
					<h1 id='accountPageUserName'>{user.name}</h1>
					<Button>Logout</Button>
				</div>
			</div>
			<OrderHistory />
		</div>
	);
}
