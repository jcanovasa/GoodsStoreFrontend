import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent {
  user: User = new User();
  password: string;
  pwdConfirmation: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  saveUser() {
    this.userService.addUser(this.user).subscribe(data => {
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.saveUser();
  }

  checkPwd() {

    if (this.user.pwd !== this.pwdConfirmation) {
      alert("Passwords do not match");
      return false;
    }

    if(this.user.pwd.length < 6 || this.pwdConfirmation.length < 6) {
      alert("Password must be at least 6 characters");
    }
    
  
    return true;
  }
  
  registerUser() {

    if(this.checkPwd()) {
      this.router.navigate(['/products-list']);
    } else {
      this.goToLogin();
    }
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
