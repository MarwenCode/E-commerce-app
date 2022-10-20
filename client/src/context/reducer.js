const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "increase": {
      let increaseCart = state.cart.map((cartItem) => {
        if (cartItem._id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: increaseCart };
    }
    case "decrease": {
      let decreaseCart = state.cart.map((cartItem) => {
        if (cartItem.quantity === 1) {
          return cartItem;
        }

        //   else  {
        //     return {...cartItem, quantity: cartItem.quantity - 1 }

        //   }

        if (cartItem._id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      return { ...state, cart: decreaseCart };
    }
    case "remove": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }

    // case "get-total": {
    //     const initialValue = 0;
    //     const total  = state.cart.reduce((previousValue, currentValue) => {
    //         previousValue + currentValue,
    //        initialValue

    //     })
    // }
    // case "get-total": {
    //     const { total, quantity } = state.cart.reduce((cartTotalPrev, cartTotalCurr) => {

    //         const {price, quantity} = cartTotalCurr;
    //         const singleItemTotal = price * quantity;

    //         cartTotalPrev.total += singleItemTotal;
    //         cartTotalPrev.quantity += quantity
    //     },{total:0, quantity:0});
    //     return {...state, total, quantity}

    // }
    case "get-total": {
      const { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      return { ...state, total, quantity };
    }

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;
