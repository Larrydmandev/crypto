import React from "react";
import { Col, Row } from "react-bootstrap";

function Header(params) {
    return(
        <section className="head-sec">
            <Row>
                <Col md={6}>
                   <div className="head-div">
                       <h2 className="head-h2">WELCOME TO THE WORLD OF CRYPTO</h2>
                   </div>
                </Col>
                <Col md={6}>
                    <div className="head-div-1">
                        <img src="./images/hero-img.png" className="head-img" alt="" />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Header