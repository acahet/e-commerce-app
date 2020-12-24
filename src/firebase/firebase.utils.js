import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
// import collection from '../pages/collection';

const config = {
	apiKey: 'AIzaSyByFSVS7Rtvdt4GEOBrppo-yYsjsP7DsPQ',
	authDomain: 'crow-shop-app.firebaseapp.com',
	databaseURL: 'https://crow-shop-app.firebaseio.com',
	projectId: 'crow-shop-app',
	storageBucket: 'crow-shop-app.appspot.com',
	messagingSenderId: '202259132544',
	appId: '1:202259132544:web:694308249bd0d42d49b665',
	measurementId: 'G-HE5DKVRDCK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, obj);
// 	});

// 	return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
