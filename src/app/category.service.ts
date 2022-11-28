import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //URL del listado de todas las categorías del backend
  private baseURL = "http://localhost:8080/api/categories/categories";
  categories: Observable<Category[]>;

  constructor(private httpClient : HttpClient) { }

  getCategoryList():Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  addCategory(category:Category) : Observable<Object> { 
    return this.httpClient.post(`${this.baseURL}`,category);
  }

  deleteCategory(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getCategoryById(id:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }

  updateCategory(id:number,category:Category): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`,category);
  }
}
