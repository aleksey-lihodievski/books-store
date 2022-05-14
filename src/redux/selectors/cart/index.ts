import { RootState } from 'redux/reducers';
import { ICartState } from 'redux/reducers/cart';

export const selectCart = (state: RootState): ICartState => state.cart;
