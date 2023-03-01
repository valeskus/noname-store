import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './ProductListPage.style.css';
import { ProductService } from '../../services';
import { setProducts } from '../../store/products/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';
import { ProductCard } from './components/ProductCard';
import { SearchBar } from './components/SearchBar/SearchBar';

export function ProductListPage() {
	const [filter, setFilter] = useState();
	const [sorted, setSorted] = useState();

	const products = useSelector(getProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		ProductService.getProductData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setProducts(data));
		}, []);

		// eslint-disable-next-line
	}, []);

	const handleSearch = useCallback((value) => {
		if (!value) {
			setFilter();
		}
		setFilter(value);
	}, []);
	const handleSort = useCallback((value) => {
		if (!value) {
			setSorted();
		}
		setSorted(value);
	}, []);

	const productsList = useMemo(() => {
		if (!filter) {
			return products;
		}
		return products.filter((product) =>
			product.title.toLowerCase().includes(filter.toLowerCase())
		);
	}, [filter, products]);

	return (
		<div className='productListPage-container'>
			<SearchBar onSearch={handleSearch} onSort={handleSort} />

			{productsList.length > 0 ? (
				<div className='productList-container'>
					{productsList.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			) : (
				<h2>Ooops...Products List Is Empty</h2>
			)}
		</div>
	);
}
