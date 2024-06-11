import { Customer } from "./customer.model";
import { ProductItem } from "./productItem.model";

export interface Order{
  id : string,
  date : Date,
  state : OrderState,
  customer : Customer,
  productItems : ProductItem []
}

export enum OrderState{
  PENDING,CONFIRMED,CANCELED,EXECUTED
}
