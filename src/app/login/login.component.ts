import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  isLoggedIn: boolean = false;
  errors: string[] = [];

  login(email,password){
    if(email == 'admin@admin' && password == 'root') {
      this.isLoggedIn = true;
      window.location.href = 'http://localhost:4200/users';

    } else {
      this.errors.push('Email or password incorrect');
    }
    
  }
}
