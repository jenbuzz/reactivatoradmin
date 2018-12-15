import { createStore, combineReducers, compose } from 'redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

const firestore = firebase.firestore(firebaseApp);

firestore.settings({
    timestampsInSnapshots: true,
});

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);
  
const rootReducer = combineReducers({
    firestore: firestoreReducer,
});

const store = createStoreWithFirebase(rootReducer, {});

export default store;
