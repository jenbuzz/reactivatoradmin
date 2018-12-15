import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ItemContainer from './components/ItemContainer';
import store from './store';
import { getCollectionCount } from './helpers/firestoreHelper';
import './App.scss';

interface IAppState {
    total: number;
    loading: boolean;
}

class App extends Component<{}, IAppState> {
    static LIMIT: number = 3;

    state = {
        total: 0,
        loading: false,
    };

    async componentDidMount() {
        const total = await getCollectionCount();
        this.setState({
            total,
        });

        this.loadMore(1);
    }

    loadMore = (page: number) => {
        const { firestore } = store;
        firestore.get({
            collection: process.env.REACT_APP_FIREBASE_COLLECTION,
            orderBy: 'name',
            limit: App.LIMIT * page,
        });
    }

    updateItem = (id: any, item: any) => {
        const { firestore } = store;
        firestore.set({
            collection: process.env.REACT_APP_FIREBASE_COLLECTION,
            doc: id,
        }, item);
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <Navigation />
                                <Header />
                                <ItemContainer
                                    total={this.state.total}
                                    loadMore={this.loadMore}
                                    loading={this.state.loading}
                                    updateItem={this.updateItem}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
