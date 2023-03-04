import React from 'react';
import './Input.style.css';
import TextField from '@mui/material/TextField';

export function Input(props) {
	return (
		<div className='input-container'>
			<TextField
				label={props.label}
				variant='filled'
				color='secondary'
				onChange={(e) => {
					props.onChange(e.target.value);
				}}
				value={props.value}
				type={props.type}
				id={props.id}
				className='input'
				placeholder={props.placeholder}
			/>
		</div>
	);
}
