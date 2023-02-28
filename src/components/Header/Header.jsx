import React from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaStore } from 'react-icons/fa';
import { Logo } from '../common/Logo';

export function Header() {
	return (
		<div className='header-container'>
			<Link to='/main'>
				<Logo />
			</Link>
			<div className='pages-container'>
				<Link className='pages-name' to='/productList'>
					<FaStore />
				</Link>
				<Link className='pages-name' to='/account'>
					<FaUserCircle />
				</Link>

				<Link className='pages-name' to='/cart'>
					<FaShoppingCart />
				</Link>
			</div>
		</div>
	);
}
