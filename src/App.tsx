import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ItemContainer from './components/ItemContainer';
import store from './store';
import { firestoreHelper } from './helpers/firestoreHelper';
import { ItemContent } from './components/Item';
import './App.scss';

interface AppState {
    total: number;
}

class App extends Component<{}, AppState> {
    static LIMIT: number = 3;

    state = {
        total: 0,
    };

    componentDidMount() {
        firestoreHelper.getCollectionCount()
            .then((total: number) => {
                this.setState({
                    total,
                });

                this.loadMore(1);
            })
            .catch((error: any) => console.log(error));
    }

    loadMore = (page: number) => {
        store.firestore.setListener({
            collection: firestoreHelper.getCollectionName(),
            orderBy: 'name',
            limit: App.LIMIT * page,
        });
    }

    updateItem = (id: number, item: ItemContent) => {
        store.firestore.update({
            collection: firestoreHelper.getCollectionName(),
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
