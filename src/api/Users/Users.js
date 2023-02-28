import { v4 as uuidv4 } from 'uuid';

export const Users = {
	1: {
		id: uuidv4(),
		email: 'UserOne@gmail.com',
		password: 'UserOne',
		isDeveloper: true,
	},
	2: {
		id: uuidv4(),
		email: 'UserTwo@gmail.com',
		password: 'UserTwo',
		isDeveloper: true,
	},
};
