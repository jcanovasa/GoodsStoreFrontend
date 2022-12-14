import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoodsStore';
  email: string;
  password: string;
  isLoggedIn: boolean = false;
  errors: string[] = [];

  login(email,password){
    if(email == 'admin@admin' && password == 'root') {
      this.isLoggedIn = true;
    } else {
      this.errors.push('Email or password incorrect');
    }
    
  }
  logout() {
    this.isLoggedIn = false;
  }
}

