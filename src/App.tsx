import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Item from './components/Item';

const dummyData: Object[] = [
    {
        name: 'Test 1',
        isactive: 1,
        image: 'images/test-image-001.jpg',
    },
    {
        name: 'Test 2',
        isactive: 0,
        image: 'images/test-image-002.jpg',
    }
    ,{
        name: 'Test 3',
        isactive: 1,
        image: null,
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <Header />
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="card">
                                        <div className="card-table">
                                            <div className="content">
                                                <Item />
                                                <Item />
                                                <Item />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
