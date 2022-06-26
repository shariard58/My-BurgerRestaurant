import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

export default class BurgerBuilder extends Component {
  state = {
    // state er modhe thake holo object

    ingradients: [
      { type: "salad", amount: 0 },
      {
        type: "cheese",
        amount: 0,
      },
      { type: "meat", amount: 0 },
    ],
  };

  addIngredientHandle = (type) => {
    const ingredients = [...this.state.ingradients];

    for (let item of ingredients) {
      if (type === item.type) {
        item.amount = item.amount + 1;
      }
    }

    this.setState({ ingredients: ingredients });
  };

  removeIngredientHandle = (type) => {
    const ingredients = [...this.state.ingradients];

    for (let item of ingredients) {
      if (type === item.type) {
        if (item.amount <= 0) {
          return;
        }

        item.amount = item.amount - 1;
      }
    }

    this.setState({ ingredients: ingredients });
  };

  // state hoy holo render and return er upore
  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingradients={this.state.ingradients} />
        <Controls
          ingredientAdded={this.addIngredientHandle}
          ingredientRemoved={this.removeIngredientHandle}
        />
      </div>
    );
  }
}
