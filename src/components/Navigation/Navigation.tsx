import React, { Component } from 'react';

interface NavigationProps {
    setDarkMode: () => void;
    isDarkMode: boolean;
}

class Navigation extends Component<NavigationProps, {}> {
    render() {
        return (
            <nav
                className={
                    'navbar' +
                    (this.props.isDarkMode ? ' is-dark' : ' is-white')
                }
            >
                <div className="navbar-brand">
                    <div className="navbar-burger burger" data-target="navMenu">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            <span>Home</span>
                        </a>
                        <a
                            className="navbar-item"
                            onClick={this.props.setDarkMode}
                        >
                            <span>Dark-Mode Switch</span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
