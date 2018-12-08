import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Item, { ItemContent } from './components/Item';
import Pagination from './components/Pagination';
import base from './base';
import './App.scss';

interface IAppState {
    items: ItemContent[];
}

class App extends Component<{}, IAppState> {
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
        const {id, ...baseItem} = item;

        base.updateDoc(`items/${id}`, baseItem)
            .then(() => console.log('updated doc'))
            .catch((error: any) => console.log(error));
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
                            <Pagination items={this.state.items} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
