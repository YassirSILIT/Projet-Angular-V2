import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  public products : Array<Product> = [];
  public productForm! : FormGroup;
  public categories: any = [];

  constructor(private fb : FormBuilder,
    private productService : ProductService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name : this.fb.control('', [Validators.required]),
      quantity : this.fb.control('', [Validators.required]),
      priceTtc : this.fb.control('', [Validators.required]),
      tva : this.fb.control('', [Validators.required]),
      priceHT : this.fb.control('', [Validators.required]),
      categoryId : this.fb.control('', [Validators.required])
    });

    this.getAllCategories();
  }

  // saveProduct(categoryId: number){
  //   let product:Product = this.productForm.value;
  //   console.log(categoryId);
  //     this.productService.saveProduct(product, categoryId).subscribe({
  //       next : data =>{
  //         alert(JSON.stringify("the product is registered !!"));
  //       }, error : err =>{
  //         console.log(err);
  //       }
  //     });
  // }

  saveProduct(): void {
    if (this.productForm.invalid) {
      return;
    }
    const productData = this.productForm.value;
    const categoryId = productData.categoryId;
    //delete productData.categoryId; // Remove categoryId from productData

    this.productService.saveProduct(productData, categoryId).subscribe({
        next : data =>{
        alert(JSON.stringify("the product is registered !!"));
        console.log('Product added successfully!');
        this.router.navigateByUrl('/products')
      }, error : err =>{
        console.log('Failed to add product:', err);
      }
    });
  }

  getAllCategories(){
    this.productService.getAllCategories().subscribe(res =>{
      this.categories = res;
    })
  }


}
