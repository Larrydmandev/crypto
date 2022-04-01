import React, {useState,useEffect} from "react";
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Col, Row, Card } from "react-bootstrap";

function Coinm() {
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


  return (
    <section className="co-sec">
        <section className="co-sec">
            <Row>
                <Col md={6}>
                   <div className="co-div">
                        <h1 className="co-h1">COINS TO INVEST IN</h1>
                    </div>
                </Col>                    
                <Col md={6}>
                    <Row className="mb-5">
                        <Col md={4} className="card-1 c-1">
                          <Link to="/Bitcoin" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[0].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[0].name}</Card.Title>
                                            <Card.Text className="text-center">${data[0].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[0].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[0].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[0].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                        <Col md={4} className="card-1 c-1">
                          <Link to="/Ethereum" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[1].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[1].name}</Card.Title>
                                            <Card.Text className="text-center">${data[1].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[1].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[1].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[1].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                        <Col md={4} className="card-1 c-1">
                          <Link to="/Tether" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[2].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[2].name}</Card.Title>
                                            <Card.Text className="text-center">${data[2].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[2].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[2].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[2].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                    </Row>


                    <Row>
                        <Col md={4} className="card-1 c-1">
                          <Link to="/Binance" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[3].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[3].name}</Card.Title>
                                            <Card.Text className="text-center">${data[3].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[3].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[3].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[3].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                        <Col md={4} className="card-1 c-1">
                          <Link to="/UsdCoin" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[4].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[4].name}</Card.Title>
                                            <Card.Text className="text-center">${data[4].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[4].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[4].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[4].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                        <Col md={4} className="card-1 c-1">
                          <Link to="/Xrp" style={{textDecoration: 'none', color: 'black'}}>
                               <Card style={{ width: '9rem' , height: '9rem' }} className="card">
                                    <Card.Body>
                                        <div style={{marginBottom: '5%'}}>
                                        <img src={data[5].image} style={{width: '30%' , height: '30%' , position: 'relative', left: '35%'}} alt="" />
                                        </div>
                                        <div>
                                            <Card.Title className="text-center">{data[5].name}</Card.Title>
                                            <Card.Text className="text-center">${data[5].current_price.toLocaleString()}</Card.Text>
                                        </div>

                                        {data[2].price_change_percentage_24h < 0 ? (
                                            <span className="red" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowDown/>
                                                {data[5].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className="green" style={{position: 'relative', left:'25%'}}>
                                                <FiArrowUpRight/>
                                                {data[5].price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </Card.Body>
                                </Card>
                          </Link> 
                        </Col>
                    </Row>
               </Col>
            </Row>
        </section>
    </section>
  )
}

export default Coinm