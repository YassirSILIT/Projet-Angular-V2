import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './componantes/customer/customers/customers.component';
import { ProductsComponent } from './componantes/product/product-action/products/products.component';
import { HomeComponent } from './componantes/home/home.component';
import { AddCustomerComponent } from './componantes/customer/add-customer/add-customer.component';
import { AddProductComponent } from './componantes/product/product-action/add-product/add-product.component';
import { EditCustomerComponent } from './componantes/customer/edit-customer/edit-customer.component';
import { NavBarComponent } from './componantes/nav-bar/nav-bar.component';
import { StatistiquesComponent } from './componantes/statistiques/statistiques.component';
import { EditProductComponent } from './componantes/product/product-action/edit-product/edit-product.component';
import { PaginationComponent } from './componantes/pagination/pagination.component';
import { CategoryComponent } from './componantes/product/category-action/category/category.component';
import { AddCategoryComponent } from './componantes/product/category-action/add-category/add-category.component';
import { EditCategoryComponent } from './componantes/product/category-action/edit-category/edit-category.component';
import { OrdersComponent } from './componantes/order/order-action/orders/orders.component';
import { ProductItemComponent } from './componantes/order/productItem-action/product-item/product-item.component';
import { OrdersByCustomerComponent } from './componantes/order/order-action/orders-by-customer/orders-by-customer.component';
import { OrdersDetailsComponent } from './componantes/order/order-action/orders-details/orders-details.component';
import { AddOrderComponent } from './componantes/order/order-action/add-order/add-order.component';
import { AddProductItemComponent } from './componantes/order/productItem-action/add-product-item/add-product-item.component';

const routes: Routes = [
  {path : "home",
   component : HomeComponent,
  //  canActivate : [AuthGuard] , data : {roles : ['USER']},
  //  children : [
  //   { path : 'statistiques', component : StatistiquesComponent}
  //  ]
  },
  {path : "statistiques", component : StatistiquesComponent},
  {path : "customers",   component : CustomersComponent},
  {path : "addCustomer", component : AddCustomerComponent},
  {path : "editCustomer/:id" , component : EditCustomerComponent},
  {path : "products",    component : ProductsComponent },
  {path : "addProduct" , component : AddProductComponent},
  {path : "nav-bar" , component : NavBarComponent},
  {path : "editProduct/:id", component : EditProductComponent},
  {path : "pagination", component : PaginationComponent},
  {path : "category", component : CategoryComponent},
  {path : "addCategory", component : AddCategoryComponent},
  {path : "editCategory/:id", component : EditCategoryComponent},
  {path : "orders", component : OrdersComponent},
  {path : "orders/:customerId", component : OrdersByCustomerComponent},
  {path : "order-details/:orderId", component : OrdersDetailsComponent},
  {path : "addOrder", component : AddOrderComponent},
  {path : "productItems", component : ProductItemComponent},
  {path : "addProductItem", component : AddProductItemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
