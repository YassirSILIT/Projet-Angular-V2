import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountName } from 'src/app/model/CountName.model';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = 'http://localhost:8083/api/v1';
  //private apiServerUrl1 = 'http://localhost:8083';

  constructor(private http : HttpClient) { }

  public getProduct(){
    return this.http.get<Array<Product>>(`${this.apiServerUrl}/products`);
  }

  public deleteProduct(product : Product){
    return this.http.delete<Array<Product>>(`${this.apiServerUrl}/products/${product.id}`);
  }

  public searchProduct(keyword : string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.apiServerUrl}/products/search?keyword=${keyword}`);
  }

  public saveProduct(product : Product, categoryId: number):Observable<Product>{
    return this.http.post<Product>(`${this.apiServerUrl}/products/category/${categoryId}`,product);
    // return this.http.post<Product>(`${this.apiServerUrl}/products`,product);

  }

  public getProductById(productId : number):Observable<Product>{
    return this.http.get<Product>(`${this.apiServerUrl}/products/${productId}`);
  }

  public updateProduct(product : Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiServerUrl}/products/${product.id}`,product);
  }

  public getNamePercentage(){
    return this.http.get<Array<CountName>>(`${this.apiServerUrl}/products/percentCountName`);
    // .pipe(map((d:Array<CountName>) => d));
  }

  public getAllCategories(){
    return this.http.get<Array<Category>>(`${this.apiServerUrl}/category`);
  }

}
