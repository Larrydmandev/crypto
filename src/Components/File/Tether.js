import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Mainnav from '../Mainnav'

function Tether() {
  return (
    <section>
        <Mainnav/>

        <div>
            <div style={{marginTop: '5%'}}>
                <h1 className="text-center">FACTS ABOUT TETHER YOU NEED TO KNOW</h1>
            </div>

            <Row>
                <Col md={6}>
                    <img src="./images/tether.png" style={{width: '90%', height: '90%', position: 'relative', top:'0%'}} alt="" />
                </Col>
                <Col md={6} style={{position:'absolute', right:'10%' , top: '40%'}}>
                   <ul style={{listStyle: 'none'}}>
                        <li style={{marginBottom:'1%'}}>
                            Tether (USDT) is a stablecoin, a type of cryptocurrency which aims to keep cryptocurrency valuations stable.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            Tether is used by crypto investors who want to avoid the extreme volatility of other cryptocurrencies while keeping value within the crypto market.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            In April 2019, the New York Attorney General accused Tether's parent company of hiding an $850 million loss
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            Tether tokens trade under the USDT symbol
                        </li>
                        <li>
                            The Founders of Tether are Brock Pierce, Craig Sellars, and Reeve Collins and it was founded in 2014 it was originally called Realcoin
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Tether