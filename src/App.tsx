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
    darkMode: boolean;
}

class App extends Component<{}, AppState> {
    static LIMIT: number = 3;

    state = {
        total: 0,
        darkMode: false,
    };

    componentDidMount() {
        firestoreHelper
            .getCollectionCount()
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
    };

    addItem = (item: ItemContent) => {
        store.firestore.add(
            {
                collection: firestoreHelper.getCollectionName(),
            },
            item
        );
    };

    updateItem = (id: number, item: ItemContent) => {
        store.firestore.update(
            {
                collection: firestoreHelper.getCollectionName(),
                doc: id,
            },
            item
        );
    };

    deleteItem = (id: number) => {
        store.firestore.delete({
            collection: firestoreHelper.getCollectionName(),
            doc: id,
        });

        this.setState((state: AppState) => ({
            total: state.total - 1,
        }));
    };

    setDarkMode = () => {
        console.log('click');
        this.setState((state: AppState) => ({
            darkMode: !state.darkMode,
        }));
    };

    render() {
        return (
            <Provider store={store}>
                <div
                    className={
                        'App' + (this.state.darkMode ? ' dark-mode' : '')
                    }
                >
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <Navigation
                                    setDarkMode={this.setDarkMode}
                                    isDarkMode={this.state.darkMode}
                                />
                                <Header />
                                <ItemContainer
                                    total={this.state.total}
                                    loadMore={this.loadMore}
                                    addItem={this.addItem}
                                    updateItem={this.updateItem}
                                    deleteItem={this.deleteItem}
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
