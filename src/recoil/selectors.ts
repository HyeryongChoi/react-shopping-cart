import { selector } from 'recoil';
import { cartListState, checkedCartItemsState } from './atoms';

export const cartListLengthState = selector({
  key: 'cartListLength',
  get: ({ get }) => {
    const cartList = get(cartListState);
    return cartList.length;
  },
});

export const totalProductsPriceState = selector({
  key: 'totalProductsPrice',
  get: ({ get }) => {
    const cartList = get(cartListState);
    const checkedCartItemIds = get(checkedCartItemsState);
    const checkedCartItems = cartList.filter((cartItem) =>
      checkedCartItemIds.includes(cartItem.id)
    );

    const totalProductsPrice = checkedCartItems.reduce((total, cartItem) => {
      const quantity = cartItem.quantity;
      const price = cartItem.product.price;

      return total + quantity * price;
    }, 0);

    return totalProductsPrice;
  },
});
