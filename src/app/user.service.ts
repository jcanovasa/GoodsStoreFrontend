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
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }

  //addUser(): ... {

  //}
  
}
