import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products : Array<Product> = [];
  public keyword : string = "";

  constructor(private productService : ProductService,
              private router : Router){

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduct().subscribe({
      next : data =>{
        this.products = data;
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  handleDelete(product : Product){
    if(confirm("Are you sure"))
    this.productService.deleteProduct(product).subscribe({
      next : value =>{
        this.products = this.products.filter(p => p.id != product.id)
      }
    })
  }

  searchProduct(){
    this.productService.searchProduct(this.keyword).subscribe({
      next : value =>{
        this.products = value;
      }
    })
  }

  handleEdit(product : Product){
    this.router.navigateByUrl(`/editProduct/${product.id}`);
  }

}
