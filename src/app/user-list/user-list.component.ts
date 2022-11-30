import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  updateUser(id: number) {
    this.router.navigate(['update-user',id]);
  }

  private getUser() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data=>{
      window.alert(data["msg"]);
      location.reload();
    });
  }

  detailsUser(id: number) {
    this.router.navigate(['user-details', id]);
  }

}
