import { Category } from "./category";
import { ProductListComponent } from "./product-list/product-list.component";

export class Product {
    id:number;
    nameItem:string;
    price:number;
    brand:string;
    color:string;
    weight:number;
    volume:number;
    stock:number;
    category:Category;
    imgURL:String;
}

