import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // cart will be used  at store.js to be imported as cartReducer  and to be
  //declared as a key and value in the reducer object (cart: cartReducer)
  // and used at the component only at useselector (state.cart)

  initialState,
  reducers: {
    addToCart: (state, action) => {
      // @ts-ignore
      state.selectedProducts.push(action.payload);
    },
  },
});
//Demonstration of the components of functions in the slice object

//so state deliver me to the current state of the cart slice, and action.payload deliver me to the product data that I want to add to the cart. Then I push the product data into the selectedProducts array in the state.



//Don't Forget to export every function to import it later at the component u want
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
