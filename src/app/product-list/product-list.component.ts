import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  /**product: Product = new Product();*/
  router: any;
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(data[0]);
      
      console.log(this.products[0]);
    })
  }

  deleteProduct(id:number) {
    this.productService.deleteProduct(id).subscribe(data => {
        this.getProduct();
    });
  }

  detailsProduct(id:number) {
    this.router.navigate(['product-details',id]);
}
}


