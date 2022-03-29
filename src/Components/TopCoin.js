import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

function TopCoin() {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <section className="container top-sec" style={{ marginTop: "10%" }}>
      <div style={{marginBottom: '5%'}}>
        <h1 className="text-center">TOP 20 CRPTOCURRENCIES</h1>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ position:'relative', left: '1%' }}>#</th>
              <th style={{ position:'relative', left: '3%' }}>Coin</th>
              <th style={{ position: 'relative', right:'1%' }}>Price</th>
              <th style={{ position: 'relative', right: '4%' }}>1h</th>
              <th style={{ position: 'relative', left:'1%' }}>24h</th>
              <th style={{ position: 'relative', left:'3%' }}>7d</th>
              <th style={{ position: 'relative', left:'5%' }}>Total volume</th>
              <th style={{position: 'relative', left:'13%' }}>Mkt Cap</th>
            </tr>
          </thead>
          {data?.map((main) => {
              console.log(main)
            return (
              <>
              <tbody>
                <tr>
                    <td style={{ position: 'relative', left: '1%' }}>{main.market_cap_rank}</td>
                    <td>
                      <img src={main.image} style={{width: '12%', height: '12%', position: 'relative', left: '3%'}} alt="" />
                    </td>
                    <td style={{position: 'relative', right: '20%'}}>{main.name}</td>
                    <td style={{position: 'relative' , right: '20%'}}>{main.symbol}</td>
                    <td style={{position: 'relative', right:'19%'}}>${main.current_price.toLocaleString()}</td>
                    <td style={{position: 'relative', right: '17%'}}>
                      {main.price_change_percentage_1h_in_currency < 0 ? (
                        <span className="red">
                          <FiArrowDown/>
                          {main.price_change_percentage_1h_in_currency.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="green">
                          <FiArrowUpRight/>
                          {main.price_change_percentage_1h_in_currency.toFixed(2)}%
                        </span>
                      )}
                    </td>
                    <td style={{position: 'relative', right: '16%'}}>
                      {main.price_change_percentage_24h_in_currency < 0 ? (
                        <span className="red">
                          <FiArrowDown/>
                          {main.price_change_percentage_24h_in_currency.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="green">
                          <FiArrowUpRight/>
                          {main.price_change_percentage_24h_in_currency.toFixed(2)}%
                        </span>
                      )}
                    </td>
                    <td style={{position: 'relative', right: '17%'}}>
                      {main.price_change_percentage_7d_in_currency < 0 ? (
                        <span className="red">
                          <FiArrowDown/>
                          {main.price_change_percentage_7d_in_currency.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="green">
                          <FiArrowUpRight/>
                          {main.price_change_percentage_7d_in_currency.toFixed(2)}%
                        </span>
                      )}
                    </td>
                    <td style={{position: 'relative', right: '13%'}}>${main.total_volume}</td>
                    <td style={{position: 'relative', right: '8%'}}>${main.market_cap}</td>
                </tr>
              </tbody>
              </>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default TopCoin;