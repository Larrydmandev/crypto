import React, {useState,useEffect} from "react";
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Coins(params) {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(()=> {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    console.log(data);

    if (!data) return null

    return(
        <section className="co-sec">
            <div className="row">
                <div className="col-6">
                    <div className="co-div">
                        <h1 className="co-h1">COINS TO INVEST IN</h1>
                    </div>
                </div>                    
                <div className="col-6">
                    <div className="row mb-5">
                        <div className="col-md-4 col-sm-12">
                            <Link to="/Bitcoin" style={{textDecoration: 'none', color:'black'}}>
                                <div className="card" style={{width: '9rem', height: '9rem'}}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[0].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[0].name}</h5>
                                        <p className="card-text text-center">${data[0].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[0].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[0].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[0].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </div>
                                </div>                 
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Link to="/Ethereum" style={{textDecoration: 'none', color: 'black'}}>
                                <div className="card" style={{width: '9rem', height: '9rem'}}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[1].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[1].name}</h5>
                                        <p className="card-text text-center">${data[1].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[1].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[1].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[1].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12">
                           <Link to="/Tether" style={{textDecoration: 'none', color:'black'}}>
                                <div className="card" style={{width: '9rem', height: '9rem' }}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[2].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[2].name}</h5>
                                        <p className="card-text text-center">${data[2].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[2].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[2].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[2].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                        
                                    </div>
                                </div>
                            </Link>
                        </div> 
                    </div>


                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <Link to="/Binance" style={{textDecoration: 'none', color: 'black'}}>
                               <div className="card" style={{width: '9rem', height: '9rem'}}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[3].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[3].name}</h5>
                                        <p className="card-text text-center">${data[3].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[3].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[3].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[3].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Link to="/UsdCoin" style={{textDecoration: 'none', color: 'black'}}>
                               <div className="card" style={{width: '9rem', height: '9rem'}}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[4].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[4].name}</h5>
                                        <p className="card-text text-center">${data[4].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[4].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[4].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[4].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Link to="/Xrp" style={{textDecoration: 'none', color:'black'}}>
                                <div className="card" style={{width: '9rem', height: '9rem'}}>
                                    <div className="card-body">
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[5].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                        <h5 className="card-title text-center" style={{textAlign: 'center'}}>{data[5].name}</h5>
                                        <p className="card-text text-center">${data[5].current_price.toLocaleString()}</p>
                                        </div>

                                        {data[5].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[5].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green text-center">
                                                <FiArrowUpRight/>
                                                {data[5].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Coins