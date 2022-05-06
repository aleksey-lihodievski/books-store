import { combineReducers } from 'redux';
import cartReducer from 'redux/reducers/cart';
import productsReducer from 'redux/reducers/products';

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
