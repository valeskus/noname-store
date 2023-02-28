import React from 'react';
import './Button.style.css';

export function Button({ children, onClick, type = 'button', value }) {
	return (
		<button type={type} value={value} onClick={onClick} className='button'>
			{children}
		</button>
	);
}
