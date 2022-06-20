import React from "react";
import Ingredient from "../Ingredient/Ingredient";

const Burger = (props) => {
  return (
    <div>
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
