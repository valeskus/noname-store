import React, { useCallback, useState } from 'react';
import './SearchBar.style.css';
import { Input } from '../../../../components/common/Input';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export function SearchBar(props) {
	const [searchValue, setSearchValue] = useState('');

	const handleClick = useCallback(() => {
		props.onSearch(searchValue);

		// eslint-disable-next-line
	}, [props.onSearch, searchValue]);

	const handleChange = useCallback(
		(nextValue) => {
			if (!nextValue) {
				props.onSearch(nextValue);
			}

			setSearchValue(nextValue);
		}, // eslint-disable-next-line
		[props.onSearch]
	);
	const handleSortBy = (event) => {
		props.onSort(event.target.value);
	};

	return (
		<div className='searchBar-container'>
			<div className='searchInput-container'>
				<Input
					onChange={handleChange}
					value={searchValue}
					placeholder='Enter product name'
					id='search'
					type='text'
				/>
			</div>
			<IconButton
				type='button'
				sx={{ p: '15px' }}
				aria-label='search'
				onClick={handleClick}
			>
				<SearchIcon />
			</IconButton>
			<div className='sort-container'>
				<FormControl variant='filled' sx={{ minWidth: 120 }}>
					<InputLabel id='demo-simple-select-filled-label'>Sort By</InputLabel>

					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={props.sortedBy}
						onChange={handleSortBy}
					>
						<MenuItem value=''>-</MenuItem>
						<MenuItem value={'PLH'}>Price: Low to High</MenuItem>
						<MenuItem value={'PHL'}>Price: High to Low</MenuItem>
						<MenuItem value={'PP'}>Popularity</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
}
