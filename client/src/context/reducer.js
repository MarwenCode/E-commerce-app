const reducer = (state, action) => {
    switch(action.type) {
      
        case "addToCart": {
            return {
                ...state, cart:[...state.cart, action.payload]
            }
        }
        case "increase": {
            let increaseCart = state.cart.map((cartItem) => {
                if(cartItem._id === action.payload) {
                    return {...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            });
            return {...state, cart:increaseCart}
          
        }
        case "decrease": {
            let decreaseCart = state.cart.map((cartItem) => {
              if(cartItem.quantity === 1) {
                return cartItem
              }
              
            //   else  {
            //     return {...cartItem, quantity: cartItem.quantity - 1 }

            //   }
              

            if(cartItem._id === action.payload) {
                return {...cartItem, quantity: cartItem.quantity - 1 }
            }
            return cartItem
            
            });
            return {...state, cart:decreaseCart}
           
          
        }




        case "LOGOUT":
            return{
                user:null,
                isFetching: false,
                error: false
            }

            default:
                return state
    }
}


export default reducer