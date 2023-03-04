import React, { useCallback, useState } from 'react';
import './Registration.style.css';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../services';

export function Registration() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	async function handleUserCreate() {
		if (!email || !password) {
			alert('oops... something went wrong');
			return;
		}

		try {
			await UserService.registerUser({ email, password });
			navigate('/login');
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
			<form className='form-container'>
				<h2>Registration</h2>
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
