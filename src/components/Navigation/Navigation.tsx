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
                            href="https://github.com/jenbuzz/reactivatoradmin"
                            target="_blank"
                        >
                            <span>GitHub</span>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <input
                                id="dark-mode-switch"
                                type="checkbox"
                                className="switch is-success"
                                checked={this.props.isDarkMode}
                                onChange={this.props.setDarkMode}
                            />
                            <label htmlFor="dark-mode-switch">
                                Go {this.props.isDarkMode ? 'bright' : 'dark'}!
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
