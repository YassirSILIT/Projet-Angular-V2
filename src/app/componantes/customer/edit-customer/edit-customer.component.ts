import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customers/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../model/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit{
  customerId! : number;
  customerFormGroup! : FormGroup;
  constructor(private activatedRoute : ActivatedRoute,
              private customerService : CustomerService,
              private fb : FormBuilder){
              }

  ngOnInit(): void {
      this.customerId=this.activatedRoute.snapshot.params['id'];
      this.customerService.getCustomerById(this.customerId).subscribe({
        next : (customer) =>{
          this.customerFormGroup=this.fb.group({
            id : this.fb.control(customer.id),
            firstName : this.fb.control(customer.firstName, [Validators.required]),
            lastName : this.fb.control(customer.lastName, [Validators.required]),
            email : this.fb.control(customer.email, [Validators.required]),
            phone : this.fb.control(customer.phone, [Validators.required])
          })
        },
        error : error =>{
          console.log(error);
        }
      })
  }

  updateCustomer(){
    let customer : Customer = this.customerFormGroup.value;
    this.customerService.updateCustomer(customer).subscribe({
      next : data =>{
        alert(JSON.stringify('the customer is updated !!'))
      }
    })
  }

}
