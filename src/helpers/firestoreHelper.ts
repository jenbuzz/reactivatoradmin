import { firestoreInstance } from '../store/store';

export default class FirestoreHelper {
    firestoreInstance: any;

    constructor(firestoreInstance: any) {
        this.firestoreInstance = firestoreInstance;
    }

    getCollectionName() {
        if (process.env.REACT_APP_FIREBASE_COLLECTION) {
            return process.env.REACT_APP_FIREBASE_COLLECTION;
        }

        throw new Error(
            'Firebase collection is not set as an environment variable.'
        );
    }

    getCollectionCount() {
        return this.firestoreInstance
            .collection(this.getCollectionName())
            .get()
            .then((snapShot: any) => {
                return snapShot.size;
            })
            .catch(() => {
                console.log('Error: Connecting to Firestore');
                return null;
            });
    }
}

export const firestoreHelper = new FirestoreHelper(firestoreInstance);
