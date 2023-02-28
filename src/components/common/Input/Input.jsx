import React from 'react';
import './Input.style.css';

export function Input(props) {
	return (
		<div className='input-container'>
			<label htmlFor='search'>{props.label}</label>
			<input
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
