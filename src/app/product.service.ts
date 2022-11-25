import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   //URL del listado de todos los usuarios del backend
   private baseURL = "http://localhost:8080/api/products/products";
   users: Observable<Product[]>;
 
   constructor(private httpClient : HttpClient) { }
 
   //Con este método obtengo los usuarios
   getProductList():Observable<Product[]> {
     return this.httpClient.get<Product[]>(`${this.baseURL}`);
   }
 
   //Con este método registro nuevos usuarios
   addProduct(product:Product) : Observable<Object> { 
     return this.httpClient.post(`${this.baseURL}`,product);
   }
   
   deleteProduct(id:number): Observable<Object> {
     return this.httpClient.delete(`${this.baseURL}/${id}`);
   }

   getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
   }

   updateProduct(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
   }
}
