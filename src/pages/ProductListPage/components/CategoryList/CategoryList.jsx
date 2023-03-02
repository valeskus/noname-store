import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../../store/categories/selectors';
import './CategoryList.style.css';
import { CategoryService } from '../../../../services';
import { setCategory } from '../../../../store/categories/actionCreators';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function CategoryList(props) {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleListItemClick = (event, index, title) => {
		setSelectedIndex(index);

		props.onClick(title);
	};

	const dispatch = useDispatch();

	const categoies = useSelector(getCategories);

	useEffect(() => {
		CategoryService.getCategoryData().then((data) => {
			if (!data) {
				return;
			}
			dispatch(setCategory(data));
		}, []);

		// eslint-disable-next-line
    }, []);

	return (
		<div className='categoryList-container'>
			<List
				sx={{ width: 250, p: 0 }}
				component='nav'
				aria-labelledby='nested-list-subheader'
				subheader={
					<ListSubheader component='div' id='nested-list-subheader'>
						Categories
					</ListSubheader>
				}
			>
				<ListItemButton
					selected={selectedIndex === 0}
					onClick={(event) => handleListItemClick(event, 0)}
				>
					<ListItemText primary='All categories' />
				</ListItemButton>

				{categoies.map((category, index) => (
					<ListItemButton
						key={category.id}
						selected={selectedIndex === index + 1}
						onClick={(event) =>
							handleListItemClick(event, index + 1, category.title)
						}
					>
						<ListItemText primary={category.title} />
					</ListItemButton>
				))}
			</List>
		</div>
	);
}
