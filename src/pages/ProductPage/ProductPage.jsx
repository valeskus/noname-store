import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './ProductPage.style.css';

import { getProducts } from '../../store/products/selectors';
import { Button } from '../../components/common/Button';
import { CartProductsService, ProductService } from '../../services';
import { setCartProduct } from '../../store/cart/actionCreators';
import { getCartProducts } from '../../store/cart/selectors';

export function ProductPage(props) {
	const randomImageId = Math.floor(Math.random() * 29);

	const { productId } = useParams();
	const dispatch = useDispatch();
	const products = useSelector(getProducts);
	const cartProductsList = useSelector(getCartProducts);

	const [product, setProduct] = useState({});
	const [buttonName, setButtonName] = useState('ADD TO BASKET');
	const [buttonLink, setButtonLink] = useState('');

	const changeButtonName = useCallback(() => {
		const isInCart = cartProductsList.find((product) => {
			return product.id === productId;
		});

		if (!isInCart) {
			return;
		}
		setButtonName('GO TO BASKET');
		setButtonLink('/cart');
	}, [cartProductsList, productId]);

	useEffect(() => {
		if (!productId) {
			return;
		}
		changeButtonName();

		ProductService.getProductById(productId).then((data) => {
			if (!data) {
				return;
			}
			setProduct(data);
		}, []);
	}, [products, productId, cartProductsList, changeButtonName]);

	const handleBuy = useCallback(() => {
		CartProductsService.setCartProduct(product).then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProduct(data));
			setButtonName('GO TO BASKET');
			setButtonLink('/cart');
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
					<Link to={buttonLink}>
						<Button onClick={handleBuy}>{buttonName}</Button>
					</Link>
				</div>
			</div>
			<div className='product-description'>
				<p className='productDetails-container'>{product.description}</p>
			</div>
		</div>
	);
}
