import Rebase from 're-base';
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

const base = Rebase.createClass(firestore);

export default base;

// Component:
/*
componentDidMount() {
    base.listenToCollection('items', {
        context: this,
        then: (data: any) => {
            if (data) {
                this.setState({
                    total: data.length,
                });
            }
        },
    });

    this.bindCollection();
}

bindCollection() {
    this.setState({
        loading: true,
    });

    base.bindCollection('items', {
        context: this,
        state: 'items',
        withIds: true,
        query: (ref: any) => {
            return ref.orderBy('name', 'asc').limit(this.state.items.length + this.LIMIT);
        },
        then: () => {
            this.setState({
                loading: false,
            });
        },
    });
}
*/
