import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

  categoryId! : number;
  categoryFormGroup! : FormGroup;

  constructor(private activatedRoute : ActivatedRoute,
              private categoryService : CategoriesService,
              private fb : FormBuilder){
  }

  ngOnInit(): void {

    this.categoryId=this.activatedRoute.snapshot.params['id'];
      this.categoryService.getCategoryById(this.categoryId).subscribe({
        next : (category) =>{
          this.categoryFormGroup=this.fb.group({
            id : this.fb.control(category.id),
            code : this.fb.control(category.code, [Validators.required]),
            designation : this.fb.control(category.designation, [Validators.required]),
          })
        },
        error : error =>{
          console.log(error);
        }
      })
  }
  updateCategory(){
    let category : Category = this.categoryFormGroup.value;
    this.categoryService.updateCategory(category).subscribe({
      next : data =>{
        alert(JSON.stringify(data))
      }
    })
  }

}
