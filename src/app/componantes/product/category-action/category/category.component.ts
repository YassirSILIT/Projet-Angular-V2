import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public category : Array<Category> = [];

  constructor(private categoryService : CategoriesService,
              private router : Router,
             ){

  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe({
      next : data =>{
        this.category = data;
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  handleDelete(category : Category){
    if(confirm("Are you sure"))
    this.categoryService.deleteCategory(category).subscribe({
      next : value =>{
        this.category = this.category.filter(p => p.id != category.id)
      }
    })
  }

  handleEdit(category : Category){
    this.router.navigateByUrl(`/editCategory/${category.id}`);
  }

}
