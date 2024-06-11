import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customers/customer.service';
import { Customer } from '../../../model/customer.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers : Array<Customer> = [] ;
  public keyword : string = "";
  public customer : any;
  constructor(private customerService : CustomerService,
              private router : Router){
  }

  ngOnInit(): void {
      this.getCustomers();
  }

  getCustomers(){

    this.customerService.getCustomer()
      .subscribe({
        next : data =>{
          this.customers = data;
        },
        error : err =>{
          console.log(err);
        }
      })


      //this.customers$ = this.customerService.getCustomer();
  }

  handleDelete(customer : Customer){
    if(confirm("Are you sure?"))
    this.customerService.deleteCustomer(customer).subscribe({
      next : value =>{
        //this.getCustomers();
        this.customers=this.customers.filter(c => c.id != customer.id)
      }
    })
  }

  searchCustomer(){
    this.customerService.searchCustomer(this.keyword).subscribe({
      next : value =>{
        this.customers = value;
      }
    })
  }

  handleEdit(customer : Customer){
    this.router.navigateByUrl(`/editCustomer/${customer.id}`);
  }

  getOrderByCustomer(customer : any ){
    this.router.navigateByUrl("/orders/"+customer.id);
  }

}
