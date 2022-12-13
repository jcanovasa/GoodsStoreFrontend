import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   //URL del listado de todos los productos del backend
   private baseURL = "http://localhost:8080/api/products/products";
   products: Observable<Product[]>;
 
   constructor(private httpClient : HttpClient) { }
 
   //Con este método obtengo los productos
   getProductList():Observable<Product[]> {
     return this.httpClient.get<Product[]>(`${this.baseURL}`);
   }
 
   //Con este método registro nuevos productos
   addProduct(product:Product) : Observable<Object> { 
      console.log(product);
     return this.httpClient.post(`${this.baseURL}`,product);
   }
   
   deleteProduct(id:number): Observable<Object> {
     return this.httpClient.delete(`${this.baseURL}/${id}`);
   }

   getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
   }

   updateProduct(id:number,product:Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,product);
   }
}
