import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

import { LogginViewComponent } from './loggin-view/loggin-view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    ProductListComponent,
    RegisterProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    LogginViewComponent,
    CartComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    RegisterNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
