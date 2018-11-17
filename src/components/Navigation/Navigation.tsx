import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar is-white">
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
            </nav>
        );
    }
}

export default Navigation;
