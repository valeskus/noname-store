import React, { useCallback } from 'react';
import { Button } from '../../../../components/common/Button';
import { useNavigate } from 'react-router-dom';

import './ProductCard.style.css';
import { CartProductsService } from '../../../../services';
import { useDispatch } from 'react-redux';
import { setCartProduct } from '../../../../store/cart/actionCreators';

export function ProductCard({ product }) {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const randomImageId = Math.floor(Math.random() * 29);
	const handleClick = useCallback(() => {
		navigate(`/productList/${product.id}`);
	}, [navigate, product.id]);

	const handleBuy = useCallback(() => {
		CartProductsService.setCartProduct(product).then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProduct(data));
		}, []);

		// eslint-disable-next-line
	}, []);
	return (
		<div className='productCard-container'>
			<div onClick={handleClick}>
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
			<div className='productCard-button'>
				<Button onClick={handleBuy}> BUY</Button>
			</div>
		</div>
	);
}
