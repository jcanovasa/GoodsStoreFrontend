import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {

  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    }, error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/products-list']);
  }

  onSubmit() {
    this.saveProduct();
  }

}
