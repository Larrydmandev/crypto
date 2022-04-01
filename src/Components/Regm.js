import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Regm() {
  return (
    <section className="reg-sec">
       <Row>
           <Col md={6}>
             <div className="reg-div">
                <img src="./images/trade.png" className="reg-img" alt="" />
             </div>
           </Col>
           <Col md={6}>
                <div className="" style={{position: 'relative', top: '40%',right: '1%'}}>
                    <h1 className="reg-h1">REGISTER WITH US <br/> AND MAKE PASSIVE INCOME</h1>
                </div>
                <div style={{position:'relative', top: '50%', right: '10%'}}>
                    <div class="row">
                        <div className="col-auto g-3 reg-input">
                            <input type="email" id="inputPassword6" placeholder="email" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div className="col-auto reg-btn">
                            <button className="btn btn-success">Continue</button>
                        </div>
                    </div>
               </div>
           </Col>
       </Row>
    </section>
  )
}

export default Regm