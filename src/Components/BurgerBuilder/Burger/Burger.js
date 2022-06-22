import React from "react";
import "./Burger.css";

import Ingredient from "../Ingredient/Ingredient";

// bahier kno component theke kno kisu send korle seta kmne map korte hoy seta
const Burger = (props) => {
  let ingredientArr = props.ingradients
    .map((item) => {
      let amountArr = [...Array(item.amount).keys()]; // this a technique of creating an array

      return amountArr.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingredientArr.length === 0) {
    ingredientArr = <p> Please add some ingredients! </p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />

      {ingredientArr}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
