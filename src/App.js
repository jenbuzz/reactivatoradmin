import React, { Component } from 'react';
import './App.scss';
import Item from './components/Item/Item';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navMenu" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item" href="/">
                                    <span>Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
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
