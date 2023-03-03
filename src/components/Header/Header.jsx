import React, { useEffect } from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
import StyledBadge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Logo } from '../common/Logo';

import { Button } from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../store/cart/selectors';
import { CartProductsService } from '../../services';
import { setCartProducts } from '../../store/cart/actionCreators';

export function Header({ user }) {
	const products = useSelector(getCartProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		CartProductsService.getCartProducts().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProducts(data));
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
				{user ? null : (
					<Link to='/login'>
						<Button className='pages-name' s>
							Login
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
