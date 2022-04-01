import React from "react";
import Coinm from "./Coinm";
import Header from "./Header";
import Mainnav from "./Mainnav";
import Regm from "./Regm";
import TopCoinm from "./TopCoinm";

function Homepage(params) {
  return (
    <>
      <Mainnav />
      <Header />
      <Coinm />
      <Regm/>
      <TopCoinm/>
    </>
  );
}

export default Homepage;
