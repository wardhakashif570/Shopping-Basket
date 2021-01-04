  
import { type } from "os";

export type cardType = {
  image: string;
  price: number;
  title: string;
  productID: number;
};
export type cardType2 = {
  image: string;
  price: number;
  title: string;
  id: number;
};
export type cardType3 = {
  image: string;
  price: number;
  title: string;
  id: string;
  Quantity: number;
  subTotal: number;
};
export type stateType = {
  counterSlice: {};
  cartSlice: {
    cartArray: [];
  };
  favSlice: {
    favArray: [];

  };
};
export type cartItemType = cardType2[];