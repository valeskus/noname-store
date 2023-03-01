import { mockedProducts } from '../constants';

export const getData = () => {
	return new Promise((resolve, reject) => {
		return resolve({ result: mockedProducts });
	});
};
