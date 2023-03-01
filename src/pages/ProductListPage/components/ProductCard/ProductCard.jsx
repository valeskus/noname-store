import React from 'react';
import './ProductCard.style.css';

export function ProductCard({ product }) {
	return (
		<div className='productCard-container'>
			<div>
				<h3>{product.title}</h3>
				<p>{product.description}</p>
			</div>
		</div>
	);
}
