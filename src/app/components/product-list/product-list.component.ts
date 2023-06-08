import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product, createProduct } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((products: Product[]) => {
        this.products = products;
        console.log('hey, nieuwe producten!');
      });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
