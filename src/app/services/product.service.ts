import { Injectable } from "@angular/core";
import { Product } from "src/models/product";

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
      { 
        id: 1,
        name: 'Witte thee',
        price: 2.99,
        photo: 'https://static.ah.nl/dam/product/AHI_43545239393334383134?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary'
      },
      {
        id: 2,
        name: 'icetea',
        price: 1.75,
        photo:
          'https://static.ah.nl/dam/product/AHI_43545239383733303439?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
      },
      {
        id: 3,
        name: 'Bourbon',
        price: 19,
        photo:
          'https://static.ah.nl/dam/product/AHI_43545239373231323932?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
      },
    ];
  
    addProduct(product: Product) {
      console.log('add', product);
      this.products.push(product);
    }
  
    deleteProduct(product: Product) {
      console.log('delete', product);
      this.products = this.products.filter((p) => p !== product);
    }
}