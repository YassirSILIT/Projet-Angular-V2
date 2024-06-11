import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {

  //public ordersDetails : Array<Order> = [];
  public orderDetails : any;
  public orderId! : string;

  constructor(private orderService : OrdersService,
              private http : HttpClient,
              private route : ActivatedRoute
  ){
      this.orderId = this.route.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8087/order/"+this.orderId).subscribe({
            next :(data) =>{
              this.orderDetails = data;
            },
            error : err =>{
              console.log(err);
            }
        })
    //this.getOrderById();
  }

  // getOrderById(){
  //   this.orderService.getOrderById(this.orderId).subscribe({
  //       next : data =>{
  //         this.ordersDetails = data;
  //       },
  //       error : err =>{
  //         console.log(err);
  //       }
  //   })
  // }


}
