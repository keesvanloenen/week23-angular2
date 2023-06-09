import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products',   // <app-products>
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  subscription!: Subscription;

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.subscription = this.productService
    .getAll()
    .subscribe((products: Product[]) => {
      this.products = products;
      console.log('hey, nieuwe producten!');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  addProduct(product: Product) {
    this.productService.addProduct(product);
  }
}
