import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBrDHZepxVPgzFSXr4M8ZnUJBrNDjfDe5k',
	authDomain: 'netflix-clone-8b4f8.firebaseapp.com',
	projectId: 'netflix-clone-8b4f8',
	storageBucket: 'netflix-clone-8b4f8.firebasestorage.app',
	messagingSenderId: '929902434695',
	appId: '1:929902434695:web:7c1fef46ed1c8816ec1b22',
	measurementId: 'G-54QCS811WD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'user'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
	} catch (error) {
		console.log(error);
		toast.error(error.code.split('/')[1].split('-').join(' '));
	}
};

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
		toast.error(error.code.split('/')[1].split('-').join(' '));
	}
};

const logout = () => {
	signOut(auth);
};

export { auth, db, login, signup, logout };
