import React from "react";
import Coins from "./Coins";
import Header from "./Header";
import Navbar from "./Navbar";
import Register from "./Register";
import TopCoin from "./TopCoin";

function Homepage(params) {
  return (
    <>
      <Navbar />
      <Header />
      <Coins />
      <Register />
      <TopCoin/>
    </>
  );
}

export default Homepage;
