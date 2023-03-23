import { IProduct } from "./product.interface";

export interface ICartItem extends IProduct {
  quantity: number;
}
