import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/common/Button';
import { CartProductsService } from '../../services';
import { delCartProducts } from '../../store/cart/actionCreators';
import { getCartProducts } from '../../store/cart/selectors';
import './CartPage.style.css';
import { CartItem } from './components/CartItem/CartItem';

export function CartPage() {
	const [subtotalPrice, setSubtotalPrice] = useState(0);
	const dispatch = useDispatch();
	const products = useSelector(getCartProducts);

	useMemo(() => {
		const price =
			products.length > 0
				? products.reduce(
						(accumulator, currentValue) => accumulator + currentValue.price,
						0
				  )
				: 0;
		setSubtotalPrice(price);
	}, [products]);

	const deleteCartList = useCallback(() => {
		CartProductsService.delCartProducts().then(
			(data) => {
				if (!data) {
					return;
				}
				dispatch(delCartProducts());
			},
			[dispatch]
		);
	}, []);

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
				<Button onClick={deleteCartList}>Buy</Button>
			</div>
		</div>
	);
}
