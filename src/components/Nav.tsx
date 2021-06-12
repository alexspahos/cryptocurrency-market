import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://versions.bulma.io/0.7.0">
                        <img src="https://versions.bulma.io/0.7.0/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>
                <div className="navbar-menu">
                    <a className="navbar-item" href="/">Home</a>
                </div>
            </nav>
        );
    }
}