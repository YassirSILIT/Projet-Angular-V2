import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer} from '../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiServerUrl = 'http://localhost:8088/api/v1';

  constructor(private http : HttpClient) { }

  public getCustomer():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.apiServerUrl}/customers`);
  }

  public deleteCustomer(customer : Customer){
    return this.http.delete<any>(`${this.apiServerUrl}/customers/${customer.id}`);
  }

  public saveCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.apiServerUrl}/customers`,customer);
  }

  public searchCustomer(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.apiServerUrl}/customers/search?keyword=${keyword}`);
  }

  public getCustomerById(customerId : number):Observable<Customer>{
    return this.http.get<Customer>(`${this.apiServerUrl}/customers/${customerId}`);
  }

  public updateCustomer(customer : Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.apiServerUrl}/customers/${customer.id}`,customer);
  }

}
