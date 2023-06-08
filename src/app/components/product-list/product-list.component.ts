import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product, createProduct } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription!: Subscription;

  // constructor(
  //   private productService: ProductService,
  // ) {}

    private productService = inject(ProductService);

  
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
}
