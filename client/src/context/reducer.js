const reducer = (state, action) => {
    switch(action.type) {
      
        case "addToCart": {
            return {
                ...state, cart:[...state.cart, action.payload]
            }
        }
        case "increase": {
            let increaseCart = state.cart.map((item) => {
                if(item._id === action.payload) {
                    return {...item, quantity: item.quantity + 1 , price: item.price}
                }
                return item
            });
            return {...state, cart:increaseCart}
          
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