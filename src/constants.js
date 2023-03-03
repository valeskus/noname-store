import { v4 as uuidv4 } from 'uuid';

export const mockedUsers = [
	{
		id: uuidv4(),
		name: 'UserOne',
		email: 'UserOne@gmail.com',
		password: 'UserOne',
	},
];

export const mockedProducts = [
	{
		id: '1p',
		title: 'Product 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category One',
		price: 150,
		popularity: 0,
	},
	{
		id: '2p',
		title: 'Product 2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category One',
		price: 140,
		popularity: 2,
	},
	{
		id: '3p',
		title: 'Product 3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category One',
		price: 170,
		popularity: 294,
	},
	{
		id: '4p',
		title: 'Product 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category One',
		price: 10,
		popularity: 34,
	},
	{
		id: '5p',
		title: 'Product 5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category One',
		price: 250,
		popularity: 5,
	},

	{
		id: '6p',
		title: 'Product 6',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Two',
		price: 100,
		popularity: 0,
	},
	{
		id: '7p',
		title: ' Product 7',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Books',
		price: 90,
		popularity: 1,
	},
	{
		id: '8p',
		title: 'Product 8',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Two',
		price: 80,
		popularity: 10,
	},
	{
		id: '9p',
		title: 'Product 9',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Two',
		price: 25,
		popularity: 22,
	},
	{
		id: '10p',
		title: 'Product 10',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Three',
		price: 500,
		popularity: 23,
	},
	{
		id: '11p',
		title: 'Product 11',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Three',
		price: 5,
		popularity: 45,
	},
	{
		id: '12p',
		title: 'Product 12',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Three',
		price: 124,
		popularity: 3,
	},
	{
		id: '13p',
		title: 'Product 13',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Cras fermentum odio eu feugiat pretium nibh ipsum.',
		category: 'Category Three',
		price: 167,
		popularity: 6,
	},
];

export const mockedCategories = [
	{ id: uuidv4(), title: 'Category One' },
	{ id: uuidv4(), title: 'Category Two' },
	{ id: uuidv4(), title: 'Category Three' },
];
