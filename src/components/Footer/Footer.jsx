import React from 'react';
import './Footer.style.css';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';

export function Footer() {
	return (
		<div className='footer-container'>
			<Link to='/main'>
				<Logo />
			</Link>
		</div>
	);
}
