import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiServerUrl = 'http://localhost:8087';

  constructor(private http : HttpClient) { }

  public getOrders(){
    return this.http.get<Array<Order>>(`${this.apiServerUrl}/orders`);
  }

  public getOrdersByCustomerId(customerId : number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiServerUrl}/orders/customers/${customerId}`);
  }

  public getOrder(){
    return this.http.get<Array<Order>>(`${this.apiServerUrl}/orders`);
  }

  public getOrderById(orderId : number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiServerUrl}/order/${orderId}`);
  }

  public saveOrder(order : Order):Observable<Order>{
    return this.http.post<Order>(`${this.apiServerUrl}/orders`,order);

  }
}
