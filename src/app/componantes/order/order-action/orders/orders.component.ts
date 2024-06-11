import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  public orders : Array<Order> = [];

  constructor(private orderService : OrdersService,){}

  ngOnInit(): void {
      this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe({
        next : data =>{
          this.orders = data;
        },
        error : err =>{
          console.log(err);
        }
    })
  }



}
