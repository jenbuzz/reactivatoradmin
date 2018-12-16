import { firestoreInstance } from '../store/store';

export const getCollectionName = () => {
    if (process.env.REACT_APP_FIREBASE_COLLECTION) {
        return process.env.REACT_APP_FIREBASE_COLLECTION;
    }

    throw new Error('Firebase collection is not set as an environment variable.');
}

export const getCollectionCount = async () => {
    return await firestoreInstance
        .collection(getCollectionName())
        .get()
        .then((snapShot: any) => {
            return snapShot.size;
        })
        .catch(() => console.log('Error: Connecting to Firestore'));
};
