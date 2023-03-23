import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../interface/cart.interface";

interface ICartState {
  cartItems: ICartItem[];
  total: number;
}

const initialState: ICartState = {
  cartItems: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
        state.cartItems[itemIndex].price += action.payload.price;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        state.total -= item.price / item.quantity;
        item.quantity -= 1;
        item.price -= item.price / (item.quantity + 1);
        state.total += item.price / item.quantity;
        if (item.quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
