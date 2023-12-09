import { addToCart } from "../../assets/Firebase/FirebaseAsyncFunction";

const initialState = {
  cart: []
};




const cartReducer = (state = initialState, action) => {


  switch (action.type) {



    case 'getcart':
      return {
        ...state,
        cart: action.payload,
      };


    case 'addcart':
      addToCart(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };




    default:
      return state;
  }










};

export default cartReducer;
