import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productDeleted = new EventEmitter<Product>();

  deleteProduct(product: Product) {
    this.productDeleted.emit(product);
  }
}

