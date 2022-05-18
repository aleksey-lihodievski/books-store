import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, ICartProduct } from 'typings/entities/products';

export interface ICartState {
  usersCart: ICartProduct[];
  loading: boolean;
  error: boolean;
}

const initialState: ICartState = {
  usersCart: [],
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICartState, action: PayloadAction<IProduct>) => {
      const isInCart = state.usersCart.some(
        (product) => product.id === action.payload.id,
      );

      if (!isInCart) {
        state.usersCart.push({ ...action.payload, quantity: 1 });
      } else {
        state.usersCart.map((product) => {
          if (product.id === action.payload.id) product.quantity += 1;
          return product;
        });
      }
    },

    buyCart: (state: ICartState) => {
      state.usersCart = [];
    },

    increaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      state.usersCart.map((product) => {
        if (product.id === action.payload) product.quantity += 1;
        return product;
      });
    },

    decreaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      state.usersCart.map((product) => {
        if (product.id === action.payload) product.quantity -= 1;
        return product;
      });

      state.usersCart = state.usersCart.filter(
        (product) => product.quantity > 0,
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, buyCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
