import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';
import store from './store';
import ItemContainer from './components/ItemContainer';
import './App.scss';

interface IAppState {
    loading: boolean;
}

class App extends Component<{}, IAppState> {
    static LIMIT: number = 3;

    state = {
        loading: false,
    };

    componentDidMount() {
        this.loadMore(1);
    }

    loadMore = (page: number) => {
        const { firestore } = store;
        firestore.get({ collection: 'items', orderBy: 'name', limit: App.LIMIT * page });
    }

    updateItem = (id: any, item: any) => {
        const { firestore } = store;
        firestore.set({ collection: 'items', doc: id }, item);
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
                                <ItemContainer total={5} loadMore={this.loadMore} loading={this.state.loading} updateItem={this.updateItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
