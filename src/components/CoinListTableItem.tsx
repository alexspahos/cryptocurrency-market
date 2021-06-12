import React from 'react';

export interface ICoinListTableItem {
    name: string;
    symbol: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
}

export class CoinListTableItem extends React.Component<{ coin: ICoinListTableItem }> {
    render() {
        return (
            <tr>
                <td>{this.props.coin.name}</td>
                <td>{this.props.coin.symbol}</td>
                <td>{this.props.coin.current_price}</td>
                <td>{this.props.coin.high_24h}</td>
                <td>{this.props.coin.low_24h}</td>
                <td>{this.props.coin.price_change_percentage_24h}</td>
            </tr>
        );
    }
}