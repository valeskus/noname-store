import React, { useEffect } from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
import StyledBadge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Logo } from '../common/Logo';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '../common/Button';
import { LoginPage } from '../../pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../store/cart/selectors';
import { CartProductsService, UserService } from '../../services';
import { setCartProducts } from '../../store/cart/actionCreators';
import { getUser } from '../../store/user/selectors';
import { setUser } from '../../store/user/actionCreators';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	height: 450,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export function Header() {
	const products = useSelector(getCartProducts);
	const user = useSelector(getUser);

	const dispatch = useDispatch();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		CartProductsService.getCartProducts().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProducts(data));
		}, []);
		UserService.getUserData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setUser(data));
		}, []);
		//eslint-disable-next-line
	}, []);
	return (
		<div className='header-container'>
			<Link to='/main'>
				<Logo />
			</Link>
			<div className='pages-container'>
				<Link className='pages-name' to='/productList'>
					<StorefrontIcon fontSize='large' />
				</Link>
				<Link className='pages-name' to='/account'>
					<PersonIcon fontSize='large' />
				</Link>

				<Link className='pages-name' to='/cart'>
					<StyledBadge badgeContent={products?.length} color='secondary'>
						<ShoppingCartIcon fontSize='large' />
					</StyledBadge>
				</Link>
			</div>
			<div className='isUserAuth'>
				{user.isAuth ? (
					<h3>Hello,{user.name}!</h3>
				) : (
					<Button className='pages-name' onClick={handleOpen}>
						Login
					</Button>
				)}
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<LoginPage />
				</Box>
			</Modal>
		</div>
	);
}
