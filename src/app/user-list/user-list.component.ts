import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  user: User = new User();
  router: any;
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id:number) {
    this.userService.deleteUser(id).subscribe(data => {
        this.getUser();
    });
  }

  detailsUser(id:number) {
    this.router.navigate(['user-details',id]);
  }

  /**
  updateUser(id:number) {
    this.userService.updateUser(id).subscribe(data =>
  }
   */
}
