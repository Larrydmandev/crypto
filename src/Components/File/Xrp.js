import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Mainnav from '../Mainnav'

function Xrp() {
  return (
        <section className="x-div">
            <Mainnav/>

            <div>
                <div style={{marginTop: '5%', marginBottom: '5%'}}>
                    <h1 className="text-center">FACTS ABOUT Xrp YOU NEED TO KNOW</h1>
                </div>

                <Row>
                    <Col md={6}>
                        <img src="./images/xrp.png" style={{position: 'absolute',  right: '70%,', top:'30%' }} alt="" />
                    </Col>
                    <Col md={6} style={{position:'absolute', right:'10%' , top: '50%'}}>
                        <ul style={{listStyle: 'none'}}>
                           <li style={{marginBottom:'1%'}}>
                                XRP is the digital asset native to the Ripple platform
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                The Ripple platform enables fast and cheap cross-border transactions.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                XRP can be purchased on various exchanges such as Bitstamp, Kraken, and Huobi Global
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                Several U.S. exchanges have delisted or temporarily halted XRP trading.
                            </li>
                            <li>
                                The Founders of XRP are Brad Garlinghouse and Chris Larsen
                            </li>
                        </ul>
                    </Col>
                </Row>
           </div>
        </section>
   )
}

export default Xrp