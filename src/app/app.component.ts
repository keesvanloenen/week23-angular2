import { Component } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // products: Product[] = [
  //   { 
  //     id: 1,
  //     name: 'Witte thee',
  //     price: 2.99,
  //     photo: 'https://static.ah.nl/dam/product/AHI_43545239393334383134?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary'
  //   },
  //   {
  //     id: 2,
  //     name: 'icetea',
  //     price: 1.75,
  //     photo:
  //       'https://static.ah.nl/dam/product/AHI_43545239383733303439?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
  //   },
  //   {
  //     id: 3,
  //     name: 'Bourbon',
  //     price: 19,
  //     photo:
  //       'https://static.ah.nl/dam/product/AHI_43545239373231323932?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
  //   },
  // ];

  // onProductAdded(productToAdd: Product) {
  //   this.products.push(productToAdd);
  // }

  // onProductDeleted(productToDelete: Product) {
  //   this.products = this.products.filter((product) => product !== productToDelete);
  // }
}
