import { Category } from "./category";
import { ProductListComponent } from "./product-list/product-list.component";

export class Product {
    id:number;
    nameItem:string;
    price:number;
    brand:string;
    color:string;
    weight:string;
    volume:string;
    stock:number;
    category:Category = new Category();
    imgURL:string;
    description:String;
}

