import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //URL del listado de todos los usuarios del backend
  private baseURL = "http://localhost:8080/api/users/users";
  users: Observable<User[]>;

  constructor(private httpClient : HttpClient) { }

  //Con este método obtengo los usuarios
  getUserList():Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  //Con este método registro nuevos usuarios
  addUser(user:User) : Observable<Object> { 
    return this.httpClient.post(`${this.baseURL}`,user);
  }
  
  //Con este método elimino usuarios
  deleteUser(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id:number,user:User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`,user);
  }
}
