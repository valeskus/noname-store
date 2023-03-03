import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.style.css';

export function ProductCard({ product }) {
	let navigate = useNavigate();

	const randomImageId = Math.floor(Math.random() * 29);
	const handleClick = useCallback(() => {
		navigate(`/productList/${product.id}`);
	}, [navigate, product.id]);

	return (
		<div className='productCard-container' onClick={handleClick}>
			<img
				className='card-image'
				src={`https://picsum.photos/id/${randomImageId}/200`}
				alt='productImage'
			/>
			<div className='productCard-content'>
				<h3>{product.title}</h3>
				<h2>{product.price}$</h2>
			</div>
		</div>
	);
}
