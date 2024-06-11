import { Order } from "./order.model";
import { Product } from "./product.model";

export interface ProductItem{
  id : number,
  quantity : number,
  price : number,
  discount : number,
  amount : number,
  productId : number,
  product : Product,
  order : Order
}
