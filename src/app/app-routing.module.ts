import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path : 'users', component:UserListComponent},
  {path : '', redirectTo: 'users',pathMatch: 'full'},
  {path : 'users/register-user', component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
