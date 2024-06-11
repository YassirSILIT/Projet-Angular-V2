import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './componantes/customer/customers/customers.component';
import { ProductsComponent } from './componantes/product/product-action/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componantes/home/home.component';
import { AddCustomerComponent } from './componantes/customer/add-customer/add-customer.component';
import { AddProductComponent } from './componantes/product/product-action/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { EditCustomerComponent } from './componantes/customer/edit-customer/edit-customer.component';
import { NavBarComponent } from './componantes/nav-bar/nav-bar.component';
import { StatistiquesComponent } from './componantes/statistiques/statistiques.component';
import { MenuComponent } from './componantes/menu/menu.component';
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
import { DashboardComponent } from './componantes/dashboard/dashboard.component';



// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8080',
//         realm: 'isoftNetwork-realm',
//         clientId: 'app-client-angular'
//       },
//       initOptions: {
//         onLoad: 'check-sso',
//         silentCheckSsoRedirectUri:
//           window.location.origin + '/assets/silent-check-sso.html'
//       }
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent,
    HomeComponent,
    AddCustomerComponent,
    AddProductComponent,
    EditCustomerComponent,
    NavBarComponent,
    StatistiquesComponent,
    MenuComponent,
    EditProductComponent,
    PaginationComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    OrdersComponent,
    ProductItemComponent,
    OrdersByCustomerComponent,
    OrdersDetailsComponent,
    AddOrderComponent,
    AddProductItemComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    KeycloakAngularModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
