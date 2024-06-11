import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  products: any[] = [];

  constructor(private productService : ProductService){
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products = []
    this.productService.getProduct().subscribe(res =>{

    })
  }

}
