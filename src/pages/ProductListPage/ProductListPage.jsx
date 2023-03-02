import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './ProductListPage.style.css';
import { ProductService } from '../../services';
import { setProducts } from '../../store/products/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';
import { ProductCard } from './components/ProductCard';
import { SearchBar } from './components/SearchBar';
import { CategoryList } from './components/CategoryList';

export function ProductListPage() {
	const [filter, setFilter] = useState();
	const [sortedBy, setSortedBy] = useState('');
	const [category, setCategory] = useState('');

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
			setSortedBy();
		}
		setSortedBy(value);
	}, []);

	const handleCategory = useCallback((value) => {
		if (!value) {
			setCategory();
		}
		setCategory(value);
	}, []);

	//rename function, rebase function
	const sortedList = (list, sortedBy) => {
		let sortedList = [];
		switch (sortedBy) {
			case 'PHL':
				sortedList = list.sort(function (a, b) {
					return b.price - a.price;
				});
				break;
			case 'PLH':
				sortedList = list.sort(function (a, b) {
					return a.price - b.price;
				});
				break;
			case 'PP':
				sortedList = list.sort(function (a, b) {
					return b.popularity - a.popularity;
				});
				break;
			default:
				sortedList = list;
		}
		return sortedList;
	};

	const filteredList = (products, category) => {
		if (!category) {
			return products;
		}
		return products.filter((product) => product.category === category);
	};

	const productsList = useMemo(() => {
		const filterByCategory = filteredList(products, category);

		const list = !filter
			? filterByCategory
			: filterByCategory.filter((product) =>
					product.title.toLowerCase().includes(filter.toLowerCase())
			  );

		sortedList(list, sortedBy);
		return list;
	}, [filter, products, sortedBy, category]);

	return (
		<div className='productListPage-container'>
			<SearchBar
				onSearch={handleSearch}
				onSort={handleSort}
				sortedBy={sortedBy}
			/>

			<div className='product-menu'>
				<CategoryList onClick={handleCategory} />
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
		</div>
	);
}
