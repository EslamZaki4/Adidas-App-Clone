const initialState = {
  allProducts: [], alternative: []
};




const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getallProducts':
      return {
        ...state,
        allProducts: action.payload.filterProducts,
        alternative : action.payload.alternative,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
