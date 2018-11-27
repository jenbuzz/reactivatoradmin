import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Item, { ItemContent } from './components/Item';
import Pagination from './components/Pagination';
import base from './base';
import './App.scss';

class App extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        base.bindCollection('items', {
            context: this,
            state: 'items',
            withIds: true,
        });
    }

    updateItem = (item: ItemContent) => {
        base.updateDoc(`items/${item.id}`, item);
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
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
