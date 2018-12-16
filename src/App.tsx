import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import ItemContainer from './components/ItemContainer';
import store from './store';
import { getCollectionName, getCollectionCount } from './helpers/firestoreHelper';
import { ItemContent } from './components/Item';
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

    componentDidMount() {
        getCollectionCount().then((total: number) => {
            this.setState({
                total,
            });

            this.loadMore(1);
        });
    }

    loadMore = (page: number) => {
        this.setState({
            loading: true,
        }, () => {
            store.firestore.get({
                collection: getCollectionName(),
                orderBy: 'name',
                limit: App.LIMIT * page,
            }).then(() => {
                this.setState({
                    loading: false,
                });
            });
        });
    }

    updateItem = (id: number, item: ItemContent) => {
        store.firestore.set({
            collection: getCollectionName(),
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
                                {this.state.loading ? <LoadingSpinner /> : ''}
                                <ItemContainer
                                    total={this.state.total}
                                    loadMore={this.loadMore}
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
