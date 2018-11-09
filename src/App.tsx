import React, { Component } from 'react';
import './App.scss';
import Item from './components/Item';
import Navigation from './components/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <section className="hero is-info is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">reactivatoradmin</h1>
                                    </div>
                                </div>
                            </section>
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
