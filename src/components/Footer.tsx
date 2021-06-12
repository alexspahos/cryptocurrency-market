import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    <p>Created by <a href="https://github.com/alexspahos">Alex Spahos</a> with <a href="https://bulma.io/" target="_blank">Bulma CSS framework</a> and <a href="https://www.coingecko.com/en/api" target="_blank">CoinGecko API</a></p>
                </div>
            </footer>
        );
    }
}