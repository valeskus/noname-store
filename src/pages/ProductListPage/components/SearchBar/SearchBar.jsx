import React, { useCallback, useState } from 'react';
import './SearchBar.style.css';
import { Button } from '../../../../components/common/Button';
import { Input } from '../../../../components/common/Input';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar(props) {
	const [value, setValue] = useState('');

	const handleClick = useCallback(() => {
		props.onSearch(value);

		// eslint-disable-next-line
	}, [props.onSearch, value]);

	const handleChange = useCallback(
		(nextValue) => {
			if (!nextValue) {
				props.onSearch(nextValue);
			}

			setValue(nextValue);
		}, // eslint-disable-next-line
		[props.onSearch]
	);

	return (
		<div className='searchBar-container'>
			<div className='searchInput-container'>
				<Input
					onChange={handleChange}
					value={value}
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
		</div>
	);
}
