import React, { useCallback, useState } from 'react';
import './Registration.style.css';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

import { Link, useNavigate } from 'react-router-dom';

export function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	function handleUserCreate() {
		if (!name || !email || password) {
			alert('oops... something went wrong');
			return;
		}

		navigate('/login');
	}
	const handleName = useCallback((name) => {
		setName(name);
	}, []);
	const handleEmail = useCallback((email) => {
		setEmail(email);
	}, []);
	const handlePassword = useCallback((password) => {
		setPassword(password);
	}, []);
	return (
		<div className='container'>
			<form className='form-container'>
				<h2>Registration</h2>
				<Input
					onChange={handleName}
					value={name}
					placeholder='Enter your name'
					label='Name:'
					id='userName'
					type='text'
				></Input>
				<Input
					onChange={handleEmail}
					value={email}
					placeholder='Enter your email'
					label='Email:'
					id='userEmail'
					type='text'
				></Input>
				<Input
					onChange={handlePassword}
					value={password}
					placeholder='Enter your password'
					label='Password:'
					id='userPassword'
					type='text'
				></Input>
				<Button onClick={handleUserCreate}>Registration</Button>
				<p>
					If you have an account you can
					<Link to='/login'> Login</Link>
				</p>
			</form>
		</div>
	);
}
