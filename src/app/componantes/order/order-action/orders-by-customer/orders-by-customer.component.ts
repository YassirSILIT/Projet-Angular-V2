import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders-by-customer',
  templateUrl: './orders-by-customer.component.html',
  styleUrls: ['./orders-by-customer.component.css']
})
export class OrdersByCustomerComponent implements OnInit{

  public orders : Array<Order> = [];
  public customerId! : number;

  constructor(private orderService : OrdersService,
              private router : Router,
              private route : ActivatedRoute){
              this.customerId =  this.route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
      this.getOrderByCustomer();
  }

  getOrders(){
    this.orderService.getOrder().subscribe({
        next : data =>{
          this.orders = data;
        },
        error : err =>{
          console.log(err);
        }
    })
  }

  getOrderByCustomer(){
     this.orderService.getOrdersByCustomerId(this.customerId).subscribe({
      next : data =>{
        this.orders = data;
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  getOrderDetails(order : any){
      this.router.navigateByUrl("/order-details/"+order.id);
  }

}
