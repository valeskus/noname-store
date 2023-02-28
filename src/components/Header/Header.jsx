import React from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaStore } from 'react-icons/fa';
import { Logo } from '../common/Logo';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '../common/Button';
import { LoginPage } from '../LoginPage';

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
	justifyContent: 'center', // p: 4,
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
			<Button className='pages-name' onClick={handleOpen}>
				Login
			</Button>
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
