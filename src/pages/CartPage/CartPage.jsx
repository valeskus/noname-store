import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/common/Button';
import { CartProductsService } from '../../services';
import { setCartProducts } from '../../store/cart/actionCreators';
import { getCartProducts } from '../../store/cart/selectors';
import './CartPage.style.css';
import { CartItem } from './components/CartItem/CartItem';

export function CartPage() {
	const dispatch = useDispatch();
	const [subtotalPrice, setSubtotalPrice] = useState(0);

	const products = useSelector(getCartProducts);

	useEffect(() => {
		// CartProductsService.getCartProducts().then((data) => {
		// 	if (!data) {
		// 		return;
		// 	}
		// 	dispatch(setCartProducts(data));
		// }, []);
		// eslint-disable-next-line
	}, []);
	useMemo(
		(value) => {
			const price =
				products.length > 0
					? products.reduce(
							(accumulator, currentValue) => accumulator + currentValue.price,
							0
					  )
					: 0;
			setSubtotalPrice(price);
		},
		[products]
	);

	return (
		<div className='cartPage-container'>
			<div className='cart-container'>
				<h3>Order</h3>
				{products.map((product, index) => {
					return <CartItem product={product} key={index} />;
				})}
				<h3>
					Subtotal ({products ? products.length : 0} item): {subtotalPrice}$
				</h3>
				<Button>Buy</Button>
			</div>
		</div>
	);
}
