import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProductPage.style.css';

import { getProducts } from '../../store/products/selectors';
import { Button } from '../../components/common/Button';
import { CartProductsService } from '../../services';
import { setCartProduct } from '../../store/cart/actionCreators';

export function ProductPage(props) {
	const dispatch = useDispatch();

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

	const handleBuy = useCallback(() => {
		CartProductsService.setCartProduct(product).then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProduct(data));
		}, []);

		// eslint-disable-next-line
	}, [product]);

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
					<Button onClick={handleBuy}>ADD TO BASKET</Button>
				</div>
			</div>
			<div className='product-description'>
				<p className='productDetails-container'>{product.description}</p>
			</div>
		</div>
	);
}
