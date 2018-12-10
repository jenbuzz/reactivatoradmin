import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Item, { ItemContent } from './components/Item';
import Pagination from './components/Pagination';
import base from './base';
import './App.scss';

interface IAppState {
    items: ItemContent[];
    total: number;
    loading: boolean;
}

class App extends Component<{}, IAppState> {
    LIMIT = 3;

    state = {
        items: [],
        total: 0,
        loading: false,
    };

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

    updateItem = (item: ItemContent) => {
        const { id, ...baseItem } = item;

        base.updateDoc(`items/${id}`, baseItem)
            .then(() => console.log('updated doc...'))
            .catch((error: any) => console.log(error));
    }

    loadMore = () => {
        base.reset();
        this.bindCollection();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <Navigation />
                            <Header />
                            <div className="columns">
                                <div className="column is-12">
                                    {this.state.loading ? <div>Loading...</div> : (
                                        <div className="card">
                                            <div className="card-table">
                                                <div className="content">
                                                    {Object.keys(this.state.items).map(
                                                        (key: any) => (
                                                            <Item
                                                                key={key}
                                                                item={this.state.items[key]}
                                                                updateItem={this.updateItem}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <Pagination
                                hasLoadedAll={this.state.items.length === this.state.total}
                                loadMore={this.loadMore}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
