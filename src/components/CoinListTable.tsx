import React from 'react';
import { ICoinListTableItem, CoinListTableItem } from './CoinListTableItem';


interface ICoinListTableState {
    coinsList: ICoinListTableItem[];
    page: number;
    loading: boolean;
}

export class CoinListTable extends React.Component<{ message: string }, ICoinListTableState> {
    state: ICoinListTableState = {
        coinsList: [],
        page: 1,
        loading: true,
    };
    
    componentDidMount() {
        this.getData(this.state.page);
    }
        
    render() {
        return (
            <section className="coin-list-table">
                <table className="table is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>symbol</th>
                            <th>current price</th>
                            <th><abbr title="highest price in the last 24 hours">high_24h</abbr></th>
                            <th><abbr title="lowest price in the last 24 hours">low_24h</abbr></th>
                            <th><abbr title="price change in percentage of the last 24 hours">price_change_percentage_24h</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coinsList.map((coin) => (<CoinListTableItem coin={coin} key={coin.symbol}/>))}
                    </tbody>
                </table>
            </section>
        );
    }

    getData(page: number) {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
            .then((res) => res.json())
            .then((data) => {
                this.setState(() => ({
                    page,
                    coinsList: data,
                    loading: false
                }));
            });
    }
}