import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { Table } from 'react-bootstrap'

function TopCoinm() {
    const [data, setData] = useState(null)

    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

    useEffect(()=> {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    console.log(data);

    if (!data) return null


  return (
        <section className="container top-sec">
            <div style={{marginBottom: '5%'}}>
              <h1 className="text-center top-h1">TOP 20 CRPTOCURRENCIES</h1>
            </div>

            <div>
              <Table responsive="md" className="main-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th style={{ position: 'relative', right:'5%' }} className="main-th">Price</th>
                            <th style={{ position: 'relative', right: '10%' }} className="main-th-1">1h</th>
                            <th style={{ position: 'relative', right:'8%'}} className="main-th-3">24h</th>
                            <th style={{ position: 'relative', right:'8%' }} className="main-th-4">7d</th>
                            <th style={{ position: 'relative', right: '5%' }} className= "main-th-5">Total volume</th>
                            <th style={{position: 'relative', left:'3%' }} className="main-th-6">Mkt Cap</th>
                        </tr>
                    </thead>

                    {data?.map((main) => {
                     console.log(main);
                        return(
                            <>
                                <tbody>
                                    <tr>
                                        <td>{main.market_cap_rank}</td>
                                        <td className="img-div">
                                            <img src={main.image} style={{width: '6%', height: '6%', position: 'relative', right: '3%'}}  alt="" />
                                        </td>
                                        <td style={{position: 'relative', right: '24%'}} className="main-td">{main.name}</td>
                                        <td style={{position: 'relative' , right: '25%'}} className="main-td-2">{main.symbol}</td>
                                        <td style={{position: 'relative', right:'23%'}} className="main-td-1">${main.current_price.toLocaleString()}</td>
                                        <td style={{position: 'relative', right: '24%'}} className="main-td-3">
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
                                            <td style={{position: 'relative', right: '24%'}} className="main-td-4">
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
                                        <td style={{position: 'relative', right: '27%'}} className="main-td-5">
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
                                        <td style={{position: 'relative', right: '23%'}} className="main-td-6">${main.total_volume}</td>
                                        <td style={{position: 'relative', right: '16%'}} className="main-td-7">${main.market_cap}</td>
                                    </tr>
                                </tbody>
                            </>


                        );

                    })}
              </Table>
            </div>
        </section>
    )
}

export default TopCoinm