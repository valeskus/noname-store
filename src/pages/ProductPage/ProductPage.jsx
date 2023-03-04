import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './ProductPage.style.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { getProducts } from '../../store/products/selectors';
import { Button } from '../../components/common/Button';
import { CartProductsService, ProductService } from '../../services';
import { setCartProduct } from '../../store/cart/actionCreators';
import { getCartProducts } from '../../store/cart/selectors';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #cfb2ea',
	textAlign: 'center',
	boxShadow: 24,
	p: 4,
};

export function ProductPage({ user }) {
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
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);

	const handleBuy = useCallback(() => {
		if (!user) {
			return setOpen(true);
		}
		CartProductsService.setCartProduct(product).then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCartProduct(data));
			setButtonName('GO TO BASKET');
			setButtonLink('/cart');
		}, []);

		// eslint-disable-next-line
	}, [product,user]);

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
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={style}>
						<p>If you want to add an item to your cart, you need to</p>
						<Link to='/login'>Log In</Link>
					</Box>
				</Modal>
			</div>
		</div>
	);
}
