import React from "react";

function Header(params) {
    return(
        <section className="head-sec">
            <div className="row">
               <div className="col-6 head-div">
                  <h1 className="head-h1"> WELCOME TO THE WORLD OF CRYPTO</h1>
               </div>
               <div className="col-6 head-div1">
                  <img src="./images/hero-img.png" alt="" />
               </div>
            </div>
        </section>
    )
}

export default Header