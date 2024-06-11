import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  public categoryForm! : FormGroup

  constructor(private fb : FormBuilder,
    private categoryService : CategoriesService){}

  ngOnInit(): void {
      this.categoryForm = this.fb.group({
        code : this.fb.control('', [Validators.required]),
        designation : this.fb.control('', [Validators.required]),
      });
  }

  saveCategory(){
    let category:Category = this.categoryForm.value;
      this.categoryService.saveCategory(category).subscribe({
        next : data =>{
          alert(JSON.stringify("The category is registered !!"));
        }, error : err =>{
          console.log(err);
        }
      });
  }

}
