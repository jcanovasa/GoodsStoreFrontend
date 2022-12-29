import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RegisterProductComponent} from './register-product/register-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}, /** tengo que redirigir esto a una página de inicio */
  { path: 'users/register-user', component: RegisterUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },

  { path: 'products-list', component: ProductListComponent },
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'products/register-product', component: RegisterProductComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},

  { path : 'category-list', component: CategoryListComponent},

  { path : 'cart', component: CartComponent},

  { path: 'register', component: RegisterNewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
