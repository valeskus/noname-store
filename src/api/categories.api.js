import { mockedCategories } from '../constants';

export const getCategoryData = () => {
	return new Promise((resolve, reject) => {
		return resolve({ result: mockedCategories });
	});
};
