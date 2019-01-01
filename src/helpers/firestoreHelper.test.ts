import { getCollectionName, getCollectionCount } from './firestoreHelper';

describe('firestoreHelper -> getCollectionName', () => {
    test('should return collection name', () => {
        const collectionName = 'test';

        process.env.REACT_APP_FIREBASE_COLLECTION = collectionName;

        expect(getCollectionName()).toEqual(collectionName);
    });

    test('should throw an error if collection name is not set', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = '';

        expect(() => {
            getCollectionName();
        }).toThrow();
    });
});

describe('firestoreHelper -> getCollectionCount', () => {
    test('should return collection count', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = 'test';

        expect.assertions(1);
        return getCollectionCount().then((count: number) => {
            expect(count).toEqual(0);
        });
    });

    test('should throw an error on connecting to firestore', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = '';

        expect(() => {
            getCollectionCount();
        }).toThrow();
    });
});
