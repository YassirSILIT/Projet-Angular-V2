import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductItem } from 'src/app/model/productItem.model';
import { ProductItemsService } from 'src/app/services/productItems/product-items.service';

@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['./add-product-item.component.css']
})
export class AddProductItemComponent implements OnInit{

  public productItem : Array<ProductItem> = [];
  public productItemForm! : FormGroup;

  public constructor(private fb : FormBuilder,
                    private productItemService : ProductItemsService){}

  ngOnInit(): void {
    this.productItemForm = this.fb.group({
      productId : this.fb.control('', [Validators.required]),
      quantity : this.fb.control('', [Validators.required]),
      price : this.fb.control('', [Validators.required]),
      discount : this.fb.control('', [Validators.required]),
      orderId : this.fb.control('', [Validators.required]),
    })
  }

  saveProductItem(): void {
    if (this.productItemForm.invalid) {
      return;
    }
    const productData = this.productItemForm.value;
    const orderId = productData.orderId;
    this.productItemService.addProductItem(productData, orderId).subscribe({
        next : data =>{
        alert(JSON.stringify("the product-item is registered !!"));
        console.log('Product added successfully!');
      }, error : err =>{
        console.log('Failed to add product:', err);
      }
    });
  }

}
