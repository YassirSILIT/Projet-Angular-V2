import { Category } from "./category.model";

export interface Product{
  id : number,
  name : string,
  quantity : number,
  priceTtc : number,
  priceHT : number,
  tva : number,
  category : Category;
}
