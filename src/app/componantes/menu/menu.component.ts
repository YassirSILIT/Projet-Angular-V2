import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit {

  public menuProperties : Array<Menu> =[
    {
      id : '1',
      titre : 'Dashboard',
      icon : 'bi bi-graph-up-arrow',
      url : '',
      sousMenu : [
        {
          id : '11',
          titre : 'Overview',
          icon : 'bi bi-pie-chart-fill',
          url : '',
        },
        {
          id : '12',
          titre : 'Statistics',
          icon : 'bi bi-bar-chart-line-fill',
          url : 'statistiques',
        },

      ]
    },
    {
      id : '2',
      titre : 'Customers',
      icon : 'bi bi-person-lines-fill',
      url : '',
      sousMenu : [
        {
          id : '21',
          titre : 'Customers',
          icon : 'bi bi-person-lines-fill',
          url : '/customers',
        },
        {
          id : '22',
          titre : 'New Customer',
          icon : 'bi bi-person-add',
          url : '/addCustomer',
        }

      ]
    },
    {
      id : '3',
      titre : 'Products',
      icon : 'bi bi-bag-check-fill',
      url : '',
      sousMenu : [
        {
          id : '31',
          titre : 'Products',
          icon : 'bi bi-bag-check-fill',
          url : '/products',
        },
        {
          id : '32',
          titre : 'New Products',
          icon : 'bi bi-bag-plus',
          url : '/addProduct',
        },
        {
          id : '33',
          titre : 'Category',
          icon : 'bi bi-tags',
          url : '/category',
        }
      ]
    },
    {
      id : '4',
      titre : 'Orders',
      icon : 'bi bi-cart3',
      url : '',
      sousMenu : [
        {
          id : '41',
          titre : 'Orders',
          icon : 'bi bi-cart3',
          url : '/orders',
        },
        {
          id : '42',
          titre : 'Product Items',
          icon : 'bi bi-cart-check',
          url : '/productItems',
        }
      ]
    },
    {
      id : '5',
      titre : 'Settings',
      icon : 'bi bi-gear',
      url : '',
      sousMenu : [
        {
          id : '51',
          titre : 'Categorys',
          icon : 'bi bi-tags',
          url : '',
        },
        {
          id : '52',
          titre : 'Users',
          icon : 'bi bi-people',
          url : '',
        }
      ]
    }
  ]

    constructor(private router : Router){}

    ngOnInit(): void {

    }

    navigate(url? : string) : void{
      this.router.navigate([url]);
    }

}
