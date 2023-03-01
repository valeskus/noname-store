import React, { useCallback, useState } from 'react';
import './Registration.style.css';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../services';
import { setUser } from '../../store/user/actionCreators';

export function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	let navigate = useNavigate();

	function handleUserCreate() {
		if (!name || !email || !password) {
			alert('oops... something went wrong');
			return;
		}

		try {
			UserService.registerUser({ name, email, password }).then((userData) => {
				dispatch(setUser(userData));
			});
			navigate('/login');
		} catch (error) {
			alert(error);
		}
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
