import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product:Product;
  id:number;
  name_item:string;
  
  constructor(private productService: ProductService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    });
    
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
