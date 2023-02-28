import React from 'react';
import './Header.style.css';

import { Link } from 'react-router-dom';
import { Button } from '../common/Button/Button';

export function Header() {
	return (
		<div className='header-container'>
			<div className='pages-container'>
				<Link to='/productList'> Product List</Link>
				<Link to='/account'>My Account</Link>
				<Link to='/cart'> Cart</Link>
				<Link to='/main'>Main</Link>
			</div>
			<div className='auth-button'>
				<Button>Logout</Button>
			</div>
		</div>
	);
}
