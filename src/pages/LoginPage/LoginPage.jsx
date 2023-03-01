import React, { useCallback, useState } from 'react';
import './LoginPage.style.css';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

import { Link, useNavigate } from 'react-router-dom';

export function LoginPage(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		try {
			// navigate('/');
		} catch (error) {
			alert(error);
		}
	}

	const handleEmail = useCallback((email) => {
		setEmail(email);
	}, []);

	const handlePassword = useCallback((password) => {
		setPassword(password);
	}, []);

	return (
		<div className='container'>
			<form className='form-container' onSubmit={handleSubmit}>
				<h2>Login</h2>

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
				<Button type='submit'>Login</Button>
				<p>
					If you not have an account you can
					<Link to='/registration'> Registration</Link>
				</p>
			</form>
		</div>
	);
}