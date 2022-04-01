import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Mainnav from '../Mainnav'

function UsdCoin() {
  return (
    <section>
        <Mainnav/>

        <div>

            <div style={{marginTop: '5%', marginBottom: '5%'}}>
                <h1 className="text-center">FACTS ABOUT USD COIN YOU NEED TO KNOW</h1>
            </div>
            <Row>
                <Col md={6}>
                    <img src="./images/usdcoin.png" style={{position: 'relative', left: '30%'}} alt="" />
                </Col>
                <Col md={6} style={{position:'absolute', right:'10%' , top: '50%'}}>
                   <ul style={{listStyle: 'none'}}>
                        <li style={{marginBottom:'1%'}}>
                            USD Coin (USDC) is a cryptocurrency that is backed by fiat money, making it a stablecoin.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            USDC reserve assets are held in segregated accounts with U.S.-regulated financial institutions.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            USD Coin is not issued by the U.S. government.
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default UsdCoin