import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnChanges {

  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {  }

  ngOnChanges(): void {
    console.log(this.product);
    
  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
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
