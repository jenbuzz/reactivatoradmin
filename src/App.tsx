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
    page: number;
}

class App extends Component<{}, IAppState> {
    LIMIT = 2;

    state = {
        items: [],
        total: 0,
        page: 0,
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
            }
        });

        this.bindCollection();
    }

    bindCollection() {
        const offset = this.state.items.length ? this.state.items[this.LIMIT - 1]['name'] : null;

        base.bindCollection('items', {
            context: this,
            state: 'items',
            withIds: true,
            query: (ref: any) => {
                if (offset) {
                    return ref.orderBy('name', 'asc').startAt(offset).limit(this.LIMIT);
                }
                    
                return ref.orderBy('name', 'asc').limit(this.LIMIT);                
            }
        });
    }

    updateItem = (item: ItemContent) => {
        const {id, ...baseItem} = item;

        base.updateDoc(`items/${id}`, baseItem)
            .then(() => console.log('updated doc...'))
            .catch((error: any) => console.log(error));
    }

    setPage = (page: number) => {
        this.setState({
            page,
        }, () => {
            base.reset();
            this.bindCollection();
        });
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
                                </div>
                            </div>
                            <Pagination total={this.state.total} limit={this.LIMIT} page={this.state.page} setPage={this.setPage} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
