import { createSlice } from "@reduxjs/toolkit";

/** @typedef {{ id: number, quantity: number, [key: string]: any }} CartProduct */
/** @typedef {{ selectedProducts: CartProduct[] }} CartState */

/** @type {CartState} */
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
      const incoming = action.payload;
      if (!incoming || incoming.id == null) return;

      const existingItem = state.selectedProducts.find(
        (product) => product.id === incoming.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.selectedProducts.push({ ...incoming, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      // @ts-ignore
      state.selectedProducts = state.selectedProducts.filter(
        // @ts-ignore
        (product) => product.id !== action.payload.id,
      );
    },
    increaseQuantity: (state, action) => {
      const itemById = state.selectedProducts.find(
        (product) => product.id === action.payload.id,
      );
      if (!itemById) return;
      itemById.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemById = state.selectedProducts.find(
        (product) => product.id === action.payload.id,
      );
      if (!itemById) return;

      itemById.quantity -= 1;
      if (itemById.quantity === 0) {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product.id !== action.payload.id,
        );
      }
    },
  },
});
//Demonstration of the components of functions in the slice object

//so state deliver me to the current state of the cart slice, and action.payload deliver me to the product data that I want to add to the cart. Then I push the product data into the selectedProducts array in the state.

//Don't Forget to export every function to import it later at the component u want
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
