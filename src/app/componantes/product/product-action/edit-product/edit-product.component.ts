import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  productId! : number;
  productFormGroup! : FormGroup;
  categories! : Category[];
  //public orderState : string[]=[];
  public products : Array<Product> = [];
  newCategory! : Category;
  newCategoryId! : number;

  constructor(private activatedRoute : ActivatedRoute,
              private productService : ProductService,
              private fb : FormBuilder){
              }

  ngOnInit(): void {

    this.productId=this.activatedRoute.snapshot.params['id'];
      this.productService.getProductById(this.productId).subscribe({
        next : (product) =>{
          this.productFormGroup=this.fb.group({
            id : this.fb.control(product.id),
            name : this.fb.control(product.name, [Validators.required]),
            quantity : this.fb.control(product.quantity, [Validators.required]),
            priceTtc : this.fb.control(product.priceTtc, [Validators.required]),
            tva : this.fb.control(product.tva, [Validators.required]),
            priceHT : this.fb.control(product.priceHT, [Validators.required])
          })
        },
        error : error =>{
          console.log(error);
        }
      })

  }

  updateProduct(){
    let product : Product = this.productFormGroup.value;
    this.productService.updateProduct(product).subscribe({
      next : data =>{
        alert(JSON.stringify(data))
      }
    })
  }

}
