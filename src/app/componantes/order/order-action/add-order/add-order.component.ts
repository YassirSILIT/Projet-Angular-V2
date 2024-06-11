import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order, OrderState } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{

  public orders : Array<Order> = [];
  public orderForm! : FormGroup;
  public orderState : string[]=[];

  constructor(private orderService : OrdersService,
              private fb : FormBuilder){}

  ngOnInit(): void {
    for(let elt in OrderState){
      let value = OrderState[elt];
      if(typeof value === 'string'){
        this.orderState.push(value)
      }
    }
    this.orderForm = this.fb.group({
      customerId : this.fb.control('', [Validators.required]),
      state : this.fb.control('', [Validators.required])
    })
  }

  saveOrder(){
    let orders:Order = this.orderForm.value;
      this.orderService.saveOrder(orders).subscribe({
        next : data =>{
          alert(JSON.stringify("the order is registered !!"));
        }, error : err =>{
          console.log(err);
        }
      });
  }

}
