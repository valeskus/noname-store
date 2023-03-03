import { auth } from '../firebaseApp';
import * as FBAuth from 'firebase/auth';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new FBAuth.GoogleAuthProvider();

export const login = async (data) => {
	try {
		const result = await FBAuth.signInWithEmailAndPassword(
			auth,
			data.email,
			data.password
		);

		return {
			result: {
				email: result.user.email,
				token: result.user.accessToken,
			},
		};
	} catch (error) {
		console.log(error);
		return 'error: no authorised';
	}
};

export const register = async (data) => {
	try {
		const userCredentials = await FBAuth.createUserWithEmailAndPassword(
			auth,
			data.email,
			data.password
		);

		return {
			result: {
				name: userCredentials.user.name,
				email: userCredentials.user.email,
			},
		};
	} catch (error) {
		console.log(error);
		return 'error: something went wrong';
	}
};

export const getUserData = () => {
	const token = localStorage.getItem('JWT');

	return new Promise((resolve, reject) => {
		if (!token) {
			return reject('Error: 401 User Unauthorized');
		}
		return resolve({
			result: {
				name: 'UserOne',
				email: 'UserOne@gmail.com',
				token: 'token1',
				isAuth: false,
			},
		});
	});
};

export const logout = async (data) => {
	try {
		await FBAuth.signOut(auth);

		return {
			result: 'succes',
		};
	} catch (error) {
		console.log(error);
		return 'error: no unauthorised';
	}
};
export const loginWithGoogle = async (data) => {
	const auth = FBAuth.getAuth();

	try {
		const result = await FBAuth.signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = FBAuth.GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		// IdP data available using getAdditionalUserInfo(result)
		// ...
	} catch (error) {
		console.log('error', error);
	}
};
