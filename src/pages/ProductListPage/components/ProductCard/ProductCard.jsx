import React from 'react';
import { Button } from '../../../../components/common/Button';
import './ProductCard.style.css';

export function ProductCard({ product }) {
	const randomImageId = Math.floor(Math.random() * 29);
	return (
		<div className='productCard-container'>
			<img
				className='card-image'
				src={`https://picsum.photos/id/${randomImageId}/200`}
				alt='logo'
			/>
			<div className='productCard-content'>
				<h3>{product.title}</h3>
				<h2>{product.price}$</h2>
			</div>
			<div className='productCard-button'>
				<Button> BUY</Button>
			</div>
		</div>
	);
}
