import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reduxFirestore, firestoreReducer, getFirestore } from 'redux-firestore';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase/app';
import 'firebase/firestore';
import effects from './effects';

const firebaseApp = firebase.initializeApp({
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'null',
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'null',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'null',
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || 'null',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'null',
});

const firestore = firebase.firestore(firebaseApp);

firestore.settings({
    timestampsInSnapshots: true,
});

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);

export interface State {
    firestore: any;
}

const initialState: State = {
    firestore: firestoreReducer,
};

const rootReducer = combineReducers(initialState);

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (a: any) => a;

const sagaMiddleware = createSagaMiddleware();

const store = createStoreWithFirebase(rootReducer, {}, compose(applyMiddleware(sagaMiddleware), devTools));

sagaMiddleware.run(effects);

export const firestoreInstance = getFirestore(firebase);

export default store;
