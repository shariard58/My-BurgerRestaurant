import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

export default class BurgerBuilder extends Component {
  state = {
    // state er modhe thake holo object

    ingradients: [
      { type: "salad", amount: 1 },
      {
        type: "cheese",
        amount: 2,
      },
      { type: "meat", amount: 1 },
    ],
  };

  // state hoy holo render and return er upore
  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingradients={this.state.ingradients} />
        <Controls />
      </div>
    );
  }
}
