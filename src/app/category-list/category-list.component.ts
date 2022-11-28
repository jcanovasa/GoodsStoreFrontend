import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  updateUser(id: number) {
    this.router.navigate(['update-category',id]);
  }

  private getCategory() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data;
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.getCategory();
    });
  }

  detailsCategory(id: number) {
    this.router.navigate(['category-details', id]);
  }
}

