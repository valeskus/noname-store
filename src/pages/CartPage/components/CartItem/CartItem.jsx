import React, { useEffect } from 'react';

import './CartItem.style.css';

export function CartItem({ product }) {
	const randomImageId = Math.floor(Math.random() * 29);

	useEffect(() => {
		// eslint-disable-next-line
	}, []);

	return (
		<div className='cartPage-productItem'>
			<img
				className='cartPage-card-image'
				src={`https://picsum.photos/id/${randomImageId}/200`}
				alt='productImage'
			/>
			<div className='cartPage-product-details'>
				<h4>{product.name}</h4>
				<p>{product.price}$</p>
			</div>
		</div>
	);
}
