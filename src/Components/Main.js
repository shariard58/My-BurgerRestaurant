import React from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header/Header";
import Controls from "./BurgerBuilder/Controls/Controls";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import { Route, Routes, Navigate, Switch } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <Header />

      <div className="container">
        {/* <BurgerBuilder /> */}
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
