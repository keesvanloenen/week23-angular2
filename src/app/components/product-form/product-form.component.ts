import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product, createProduct } from 'src/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  constructor(private productService: ProductService) {

  }
  newProduct = createProduct();

  addProduct(form: NgForm) {
    this.productService.addProduct(this.newProduct);
    this.newProduct = createProduct();
    form.reset();
  }
}
