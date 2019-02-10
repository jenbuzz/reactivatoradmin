import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.scss';

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
                            <FontAwesomeIcon icon="home" />
                            <span>&nbsp;Home</span>
                        </a>
                        <a
                            className="navbar-item"
                            href="https://github.com/jenbuzz/reactivatoradmin"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'github']} />
                            <span>&nbsp;GitHub</span>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div
                            className="navbar-item"
                            onClick={this.props.setDarkMode}
                        >
                            <FontAwesomeIcon icon="lightbulb" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
