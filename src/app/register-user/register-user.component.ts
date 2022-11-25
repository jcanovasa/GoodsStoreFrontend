import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  saveUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.saveUser();
  }
}
