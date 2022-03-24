import React from 'react'
import Navbar from '../Navbar'

function Binance() {
  return (
    <section>
        <Navbar/>

        <div>
            <div style={{marginTop: '5%', marginBottom: '5%'}}>
                <h1 className="text-center">FACTS ABOUT BINANCE YOU NEED TO KNOW</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src="./images/binance.png" style={{position:'absolute', right:'70%' , top: '50%'}} alt="" />
                </div>
                <div className="col-6" style={{position:'absolute', right:'10%' , top: '50%'}}>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{marginBottom:'1%'}}>
                            Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            BNB was initially based on the Ethereum network but is now the native currency of Binance's own blockchain, the Binance chain.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            Every quarter, Binance uses one-fifth of its profits to repurchase and permanently destroy, or "burn," Binance coins held in its treasury.
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            Binance was created as a utility token for discounted trading fees in 2017, but its uses have expanded to numerous applications, including payments for transaction fees (on the Binance Chain), travel bookings, entertainment, online services, and financial services
                        </li>
                        <li style={{marginBottom:'1%'}}>
                            At the time of writing, Binance had a market cap of more than $56 billion and ranks behind only Bitcoin, Ethereum, and USD Tether in terms of market cap.
                        </li>
                        <li>
                            The founder of Binance Coin is Changpeng Zhao
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Binance