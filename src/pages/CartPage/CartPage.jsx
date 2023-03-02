import React from 'react';
import { Button } from '../../components/common/Button';
import './CartPage.style.css';

export function CartPage() {
	const randomImageId = Math.floor(Math.random() * 29);

	return (
		<div className='cartPage-container'>
			<div className='cart-container'>
				<h3>Order</h3>

				<div className='cartPage-productItem'>
					<img
						className='cartPage-card-image'
						src={`https://picsum.photos/id/${randomImageId}/200`}
						alt='productImage'
					/>
					<div className='cartPage-product-details'>
						<h4>Product</h4>
						<p>120$</p>
					</div>
				</div>
				<h3>Subtotal (1 item): 120$</h3>
				<Button>Buy</Button>
			</div>
			{/* <div className='cartPage-productItem'>
				<img
					className='cartPage-card-image'
					src={`https://picsum.photos/id/${randomImageId}/200`}
					alt='productImage'
				/>
				<div className='cartPage-product-details'>
					<h3>Product</h3>
					<p>120$</p>
				</div>
			</div> */}
		</div>
	);
}
