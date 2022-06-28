import * as actionTypes from "./actionTypes";

const INGREDIENT_PRICE = {
  salad: 20,
  cheese: 40,
  meat: 90,
};

const INITIAL_STATE = {
  ingradients: [
    { type: "salad", amount: 0 },
    {
      type: "cheese",
      amount: 0,
    },
    { type: "meat", amount: 0 },
  ],

  totalPrice: 80,
  purchasable: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const ingredients = [...state.ingradients];
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      for (let item of ingredients) {
        if (action.payload === item.type) {
          item.amount = item.amount + 1;
        }
      }

      return {
        ...state,
        ingredients: ingredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload],
      };

    //   this.setState({ ingredients: ingredients, totalPrice: newPrice });

    case actionTypes.REMOVE_INGREDIENT:
      //   const ingredients = [...this.state.ingradients];
      //   const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

      for (let item of ingredients) {
        if (item.type === action.payload) {
          if (item.amount <= 0) {
            return state;
          }

          item.amount = item.amount - 1;
        }
      }

      //   this.setState({ ingredients: ingredients, totalPrice: newPrice });
      //   this.updatePurchasable(ingredients);

      return {
        ...state,
        ingredients: ingredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload],
      };

    case actionTypes.UPDATE_PURCHASABLE:
      const sum = state.ingradients.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);

      return {
        ...state,
        purchasable: sum > 0,
      };

    default:
      return state;
  }
};
