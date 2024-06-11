import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiServerUrl = 'http://localhost:8083/api/v1';

  constructor(private http : HttpClient) { }

  public getCategory(){
    return this.http.get<Array<Category>>(`${this.apiServerUrl}/category`);
  }

  public saveCategory(category : Category):Observable<Category>{
    return this.http.post<Category>(`${this.apiServerUrl}/category`,category);
  }

  public getCategoryById(category : number):Observable<Category>{
    return this.http.get<Category>(`${this.apiServerUrl}/category/${category}`);
  }

  public updateCategory(category : Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiServerUrl}/category/${category.id}`,category);
  }
  public deleteCategory(category : Category){
    return this.http.delete<Array<Category>>(`${this.apiServerUrl}/category/${category.id}`);
  }

}
