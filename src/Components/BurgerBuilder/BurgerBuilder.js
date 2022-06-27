import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Summary from "./Summary/Summary";

const INGREDIENT_PRICE = {
  salad: 20,
  cheese: 40,
  meat: 90,
};

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

    totalPrice: 80,
    modalOpen: false,
    purchasable: false,
  };

  updatePurchasable = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandle = (type) => {
    const ingredients = [...this.state.ingradients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    for (let item of ingredients) {
      if (type === item.type) {
        item.amount = item.amount + 1;
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  };

  removeIngredientHandle = (type) => {
    const ingredients = [...this.state.ingradients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    for (let item of ingredients) {
      if (type === item.type) {
        if (item.amount <= 0) {
          return;
        }

        item.amount = item.amount - 1;
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  };

  // state hoy holo render and return er upore

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingradients={this.state.ingradients} />
          <Controls
            ingredientAdded={this.addIngredientHandle}
            ingredientRemoved={this.removeIngredientHandle}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.state.purchasable}
          />
        </div>

        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5> Total Price : {this.state.totalPrice.toFixed(0)}</h5>
            <Summary ingradients={this.state.ingradients} />
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={this.toggleModal}>
              {" "}
              Continue to checkout{" "}
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              {" "}
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
