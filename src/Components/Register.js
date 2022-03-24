import React from "react";

function Register(params) {
    return(
        <section className="reg-sec">
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="reg-div">
                            <img src="./images/trade.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="" style={{position: 'relative', top: '40%'}}>
                           <h1>REGISTER WITH US AND MAKE PASSIVE INCOME</h1>
                        </div>
                        <div style={{position:'relative', top: '50%', left: '1%'}}>
                           <div class="row g-3 align-items-center">
                                <div className="col-auto">
                                    <input type="email" id="inputPassword6" placeholder="email" className="form-control" aria-describedby="passwordHelpInline"/>
                                </div>
                                <div className="col-auto">
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