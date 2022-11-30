import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:User;
  id:number;
  name:string;
  surname:string;
  email:string;
  birth:Date;

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['update-user',id]);
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
