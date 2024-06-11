import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/model/productItem.model';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  private apiServerUrl = 'http://localhost:8087/api/v1';

  constructor(private http : HttpClient) { }

  public getAllProductItems(){
    return this.http.get<Array<ProductItem>>(`${this.apiServerUrl}/allProductItems`);
  }

  public deleteProductItem(productItem : ProductItem){
    return this.http.delete<Array<ProductItem>>(`${this.apiServerUrl}/productItems/${productItem.id}`);
  }

  public getProductById(productItemsId : number):Observable<ProductItem>{
    return this.http.get<ProductItem>(`${this.apiServerUrl}/productItems/${productItemsId}`);
  }

  public addProductItem(productItem : ProductItem, orderId : string):Observable<ProductItem>{
    return this.http.post<ProductItem>(`${this.apiServerUrl}/productItems/orders/${orderId}`, productItem);
  }
}
