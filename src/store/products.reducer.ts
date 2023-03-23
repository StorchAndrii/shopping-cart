import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product.interface";

interface IProductsState {
  products: IProduct[];
}

const initialState: IProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
