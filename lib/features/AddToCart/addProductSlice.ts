import { ICart } from "@/types/contentType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICart[] = [];

const addProductSlice = createSlice({
  name: "addProductToCart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICart>) => {
      const existingProduct = state.find(
        (product) => product.productTitle === action.payload.productTitle
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.productTitle !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find(
        (product) => product.productTitle === action.payload
      );
      if (product) product.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find(
        (product) => product.productTitle === action.payload
      );

      if (product) {
        if (product.quantity === 1) {
         
          const index = state.findIndex(
            (p) => p.productTitle === action.payload
          );
          if (index !== -1) state.splice(index, 1); 
        } else {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  addProductSlice.actions;
export default addProductSlice.reducer;
