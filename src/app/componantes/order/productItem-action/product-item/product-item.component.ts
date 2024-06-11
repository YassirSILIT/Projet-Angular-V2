import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from 'src/app/model/productItem.model';
import { ProductItemsService } from 'src/app/services/productItems/product-items.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  public productItems : Array<ProductItem> = [];
  public id! : number;

  public constructor(private productItemService : ProductItemsService,
                     private router : Router){}

  ngOnInit(): void {
    this.getProductItems();
  }

  getProductItems(){
    this.productItemService.getAllProductItems().subscribe({
      next : data =>{
        this.productItems = data;
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  handleDelete(productItems : ProductItem){
    if(confirm("Are you sure"))
      this.productItemService.deleteProductItem(productItems).subscribe({
        next : value =>{
          this.productItems = this.productItems.filter(pri => pri.id != productItems.id)
        }
      })
  }

  // searchProduct(){

  // }

}
