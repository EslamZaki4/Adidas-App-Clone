import { addProductToFirebase } from '../../assets/Firebase/FirebaseAsyncFunction'
import { removeProductFromFirebase } from '../../assets/Firebase/FirebaseAsyncFunction'
const initialState = {
  wishlist: [],
  loadingId: false
};




const wishlist = (state = initialState, action) => {
  switch (action.type) {


    case 'getwishlist':
      return {
        ...state,
        wishlist: action.payload,
      };


    case 'addwishlist':
      {
        const isProductAlreadyAdded = state.wishlist.find(id => id === action.payload);
        if (isProductAlreadyAdded) {
          removeProductFromFirebase(action.payload) //remove prd from firebase
          return {
            ...state,
            wishlist: state.wishlist.filter(x => x != action.payload) //remove prd from local state,
          };
        } else {

          addProductToFirebase(action.payload); //add prd to firebase
          return {
            ...state,
            wishlist: [...state.wishlist, action.payload]
          };
        }


      }

    case 'loadingId':
      return {
        ...state,
        loadingId: action.payload,
      };


    default:
      return state;
  }
};

export default wishlist;
