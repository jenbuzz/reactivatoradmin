import React, { Component } from 'react';
import firebase from 'firebase/app';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Item, { ItemContent } from './components/Item';
import Pagination from './components/Pagination';
import './App.scss';

const dummyData: ItemContent[] = [
    {
        id: 1,
        name: 'Test 1',
        isactive: true,
        image: 'images/test-image-001.jpg',
    },
    {
        id: 2,
        name: 'Test 2',
        isactive: false,
        image: 'images/test-image-002.jpg',
    },
    {
        id: 3,
        name: 'Test 3',
        isactive: true,
        image: '',
    }
];

class App extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        var config = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        };
        firebase.initializeApp(config);

        this.setState({
            items: dummyData,
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
                                                {this.state.items.map(
                                                    (item: ItemContent) => <Item key={item.id} item={item} />
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
