import React from 'react';
import { ProductService } from '../../services';
import { setProducts } from '../../store/products/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';

export function ProductListPage() {
	const products = useSelector(getProducts);
	console.log(products);

	const dispatch = useDispatch();

	React.useEffect(() => {
		ProductService.getProductData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setProducts(data));
		}, []);

		// eslint-disable-next-line
	}, []);
	return <div></div>;
}
