import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProductPage.style.css';

import { getProducts } from '../../store/products/selectors';
import { Button } from '../../components/common/Button';

export function ProductPage(props) {
	const randomImageId = Math.floor(Math.random() * 29);

	const { productId } = useParams();

	const products = useSelector(getProducts);

	const [product, setProduct] = useState({});

	useEffect(() => {
		if (!productId) {
			return;
		}
		const currentProduct = products.find((product) => {
			return product.id === productId;
		});
		if (!currentProduct) {
			const currentProduct = {
				id: 1,
				title: 'Product',
				description: 'i am default description',
				category: 'Category',
				price: 10,
				popularity: 34,
			};
			setProduct(currentProduct);
			return;
		}
		setProduct(currentProduct);
	}, [products, productId]);

	const handleBuy = useCallback(() => {}, []);

	return (
		<div className='productPage-container'>
			<div className='productPage-menu'>
				<img
					className='productPage-card-image'
					src={`https://picsum.photos/id/${randomImageId}/200`}
					alt='productImage'
				/>
				<div className='productPage-details'>
					<h3>{product.title}</h3>
					<p>{product.price}$</p>
					<Button onClick={handleBuy}>BUY</Button>
				</div>
			</div>
			<div className='product-description'>
				<p className='productDetails-container'>{product.description}</p>
			</div>
		</div>
	);
}
