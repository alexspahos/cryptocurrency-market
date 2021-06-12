import React from 'react';
import { Hero } from '../components/Hero';
import { CoinListTable } from '../components/CoinListTable';

export class Home extends React.Component {
    render() {
        return (
            <>
                <Hero title="Homepage" subtitle="Find here a list of coins"></Hero>
                <CoinListTable message="hello"></CoinListTable>
            </>
        );
    };
}