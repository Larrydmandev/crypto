import React from "react";
import Navbar from "../Navbar";

function Bitcoin(params) {
    return(
        <section>
            <Navbar/>

            <div style={{marginTop:'10%'}} className="bit-div">
                <div className="text-center bit-div1">
                    <h1>FUN FACTS ON BITCOIN</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src="./images/bitcoin.png" style={{width: '100%', height:'100%'}} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12" style={{position:'absolute', right:'10%' , top: '70%'}}>
                        <ul style={{listStyle: 'none'}}>
                            <li style={{marginBottom:'1%'}}>
                                Launched in 2009, Bitcoin is the world's largest cryptocurrency by market capitalization.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                Unlike fiat currency, Bitcoin is created, distributed, traded, and stored with the use of a decentralized ledger system, known as a blockchain.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                Bitcoin's history as a store of value has been turbulent; it has gone through several cycles of boom and bust over its relatively short lifespan.
                            </li>
                            <li style={{marginBottom:'1%'}}>
                                As the earliest virtual currency to meet widespread popularity and success, Bitcoin has inspired a host of other cryptocurrencies in its wake.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bitcoin