import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Summary from "./Summary/Summary";

import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../redux/actionCreator";

const mapStateToProps = (state) => {
  return {
    ingradients: state.ingradients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (igtype) => dispatch(addIngredient(igtype)),
    removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),

    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

// const INGREDIENT_PRICE = {
//   salad: 20,
//   cheese: 40,
//   meat: 90,
// };

class BurgerBuilder extends Component {
  state = {
    // state er modhe thake holo object

    // ingradients: [
    //   { type: "salad", amount: 0 },
    //   {
    //     type: "cheese",
    //     amount: 0,
    //   },
    //   { type: "meat", amount: 0 },
    // ],

    // totalPrice: 80,
    modalOpen: false,
    // purchasable: false,
  };

  addIngredientHandle = (type) => {
    this.props.addIngredient(type);
    // this.updatePurchasable(ingredients);

    this.props.updatePurchasable();
  };

  removeIngredientHandle = (type) => {
    this.props.removeIngredient(type);
    this.props.updatePurchasable();
  };

  // state hoy holo render and return er upore

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
    console.log("Duke");
  };

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingradients={this.props.ingradients} />
          <Controls
            ingredientAdded={this.addIngredientHandle}
            ingredientRemoved={this.removeIngredientHandle}
            price={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>

        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5> Total Price : {this.props.totalPrice.toFixed(0)}</h5>
            <Summary ingradients={this.props.ingradients} />
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
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

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
