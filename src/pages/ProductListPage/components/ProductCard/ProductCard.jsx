import React from 'react';
import { Button } from '../../../../components/common/Button';
import './ProductCard.style.css';

export function ProductCard({ product }) {
	const randomImageId = Math.floor(Math.random() * 200);
	return (
		<div className='productCard-container'>
			<img
				className='card-image'
				src={`https://picsum.photos/id/${randomImageId}/200`}
				alt='logo'
			/>
			<div className='productCard-content'>
				<h3>{product.title}</h3>
			</div>
			<div className='productCard-button'>
				<Button> BUY</Button>
			</div>
		</div>
	);
}
