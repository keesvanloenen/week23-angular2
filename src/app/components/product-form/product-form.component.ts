import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product, createProduct } from 'src/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  newProduct = createProduct();
  @Output() productAdded = new EventEmitter<Product>();

  addProduct(form: NgForm) {
    this.productAdded.emit(this.newProduct);
    this.newProduct = createProduct();
    form.reset();
  }
}
