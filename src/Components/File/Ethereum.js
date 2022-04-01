import react from 'react'
import { Col, Collapse, Row } from 'react-bootstrap'
import Mainnav from '../Mainnav'

function Ethereum(params) {
    return(
        <section>
            <Mainnav/>

            <div>
               <div style={{marginTop: '5%', marginBottom: '5%'}}>
                    <h1 className="text-center">FACTS ABOUT ETHEREUM YOU NEED TO KNOW</h1>
                </div>

                <Row>
                    <Col md={6}>
                      <img src="./images/ethereum.png" alt="" />
                    </Col>
                    <Col md={6} style={{position:'absolute', right:'10%' , top: '50%'}}>
                       <ul style={{listStyle: 'none'}}>
                            <li style={{marginBottom:'1%'}}>
                                Ethereum is a blockchain-based platform that is best known for its cryptocurrency, ETH.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                The blockchain technology that powers Ethereum enables secure digital ledgers to be publicly created and maintained.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                Bitcoin and Ethereum have many similarities but different long-term visions and limitations.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                Ethereum is transitioning to an operational protocol that offers incentives to process transactions to those who own the largest amounts of ETH.
                            </li>
                            <li>
                                The Founder of Ethereum is Vitalik Buterin, a Russian-born Canadian Programmer
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    )
}


export default Ethereum