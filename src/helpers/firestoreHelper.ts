import { firestoreInstance } from './../store';

export const getCollectionCount = async () => {
    return await firestoreInstance
        .collection(process.env.REACT_APP_FIREBASE_COLLECTION)
        .get()
        .then((snapShot: any) => {
            return snapShot.size;
        })
        .catch(() => console.log('Error: Connecting to Firestore'));
}
