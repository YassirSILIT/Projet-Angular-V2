import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customers/customer.service';
import { Customer } from '../../../model/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customerForm! : FormGroup

  constructor(private fb : FormBuilder, private customerService : CustomerService){

  }

  ngOnInit(): void {
      this.customerForm = this.fb.group({
        firstName : this.fb.control('', [Validators.required]),
        lastName : this.fb.control('', [Validators.required]),
        email : this.fb.control('', [Validators.required]),
        phone : this.fb.control('', [Validators.required]),
      });
  }
  saveCustomer(){
      let customer:Customer = this.customerForm.value;
      this.customerService.saveCustomer(customer).subscribe({
        next : data =>{
          alert(JSON.stringify("the customer is registered !!"));
        }, error : err =>{
          console.log(err);
        }
      });
  }

}
