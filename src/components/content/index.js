import React from 'react';
import './index.css';

const URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const Index = () => {
    const [items, setItems] = React.useState([]);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        fetch(URL)
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
            (error) => {
              setError(error);
            }
          )
      }, [])

    return (
        <div className="body">
            <h2>Top Crypto Coins</h2>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Price Change(USD)</th>
                        <th>24h High</th>
                        <th>24h Low</th>
                        <th>24h Volume</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>

            {
                items?.map((item) => (  
                    <tbody>
                        <tr>
                            <td>{item.market_cap_rank}</td>
                            <td><img src={item?.image} alt="Symbol" width="20px" height="20px" /></td>
                            <td>{item.name}</td>
                            <td>{`$ ${item.current_price.toLocaleString()}`}</td>
                            <td style={item.price_change_24h > 0 ? {color: 'green'} : {color: 'red'}}>
                                {`$ ${item.price_change_24h.toLocaleString()}`}
                            </td>
                            <td>{`$ ${item.high_24h.toLocaleString()}`}</td>
                            <td>{`$ ${item.low_24h.toLocaleString()}`}</td>
                            <td>{`$ ${item.total_volume.toLocaleString()}`}</td>

                            <td style={item.price_change_percentage_24h > 0 ? {color: 'green'} : {color: 'red'}}>
                                {`${item.price_change_percentage_24h} %`}
                            </td>

                            <td>{`$ ${item.market_cap.toLocaleString()}`}</td>
                        </tr>
                    </tbody>
                ))
            }
            </table>
            {console.log(error)}
        </div>
    )
}

export default Index;
