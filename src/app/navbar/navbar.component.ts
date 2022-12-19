import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean = true;

  logout() {
    this.isLoggedIn = false;
    window.location.href = 'http://localhost:4200/login';
  }
}
