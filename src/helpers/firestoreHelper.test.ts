import FirestoreHelper from './firestoreHelper';

describe('firestoreHelper -> getCollectionName', () => {
    const firestoreHelper = new FirestoreHelper({});

    test('should return collection name', () => {
        const collectionName = 'test';

        process.env.REACT_APP_FIREBASE_COLLECTION = collectionName;

        expect(firestoreHelper.getCollectionName()).toEqual(collectionName);
    });

    test('should throw an error if collection name is not set', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = '';

        expect(() => {
            firestoreHelper.getCollectionName();
        }).toThrow();
    });
});

describe('firestoreHelper -> getCollectionCount', () => {
    const getMock = jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve({size: 2});
        });
    });
    const collectionMock = jest.fn((collectionName: string) => {return {get: getMock}});

    const firestoreHelper = new FirestoreHelper({collection: collectionMock});

    test('should return collection count', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = 'test';

        expect.assertions(1);
        return firestoreHelper.getCollectionCount().then((count: number) => {
            expect(count).toEqual(2);
        });
    });

    test('should throw an error on connecting to firestore', () => {
        process.env.REACT_APP_FIREBASE_COLLECTION = '';

        expect(() => {
            firestoreHelper.getCollectionCount();
        }).toThrow();
    });
});
