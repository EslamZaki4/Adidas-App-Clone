const initialState = {
    home: false , shop : false , wishlist : false , cart : false , radar : false
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {



      case 'homeactive':
        return {
          ...state,
          home: true
        };
      case 'homeblur':
        return {
          ...state,
          home: false
        };


   case 'shopactive':
        return {
          ...state,
          shop: true
        };
      case 'shopblur':
        return {
          ...state,
          shop: false
        };



        case 'wishlistactive':
          return {
            ...state,
            wishlist: true
          };
        case 'wishlistblur':
          return {
            ...state,
            wishlist: false
          };



          case 'cartactive':
            return {
              ...state,
              cart: true
            };
          case 'cartblur':
            return {
              ...state,
              cart: false
            };



            
      default:
        return state;
    }
  };
  
  export default counterReducer;
  