import { initializeApp } from 'firebase/app';
import {
	getAuth,
	browserLocalPersistence,
	setPersistence,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB7KyCyBsX55t-WwwzVfAqSOagPcKzC6OA',
	authDomain: 'nonamestore-9f68e.firebaseapp.com',
	projectId: 'nonamestore-9f68e',
	storageBucket: 'nonamestore-9f68e.appspot.com',
	messagingSenderId: '381112011640',
	appId: '1:381112011640:web:5b6606e67a817e3dbd168d',
	measurementId: 'G-3EHWV0LSQ5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

(async () => {
	await setPersistence(auth, browserLocalPersistence);
})();

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
