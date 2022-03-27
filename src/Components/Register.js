import React from "react";

function Register(params) {
    return(
        <section className="reg-sec">
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="reg-div">
                            <img src="./images/trade.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="" style={{position: 'relative', top: '40%',right: '1%'}}>
                           <h1>REGISTER WITH US <br/> AND MAKE PASSIVE INCOME</h1>
                        </div>
                        <div style={{position:'relative', top: '50%', right: '10%'}}>
                           <div class="row">
                                <div className="col-auto col-md-6 col-sm-12">
                                    <input type="email" id="inputPassword6" placeholder="email" className="form-control" aria-describedby="passwordHelpInline"/>
                                </div>
                                <div className="col-auto col-md-6 col-sm-12">
                                    <button className="btn btn-success">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register