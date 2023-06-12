import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productDeleted = new EventEmitter<Product>();

  constructor(private router: Router) {}
  
  deleteProduct(product: Product) {
    this.productDeleted.emit(product);
  }

  showDetails(product: Product) {
    this.router.navigate(['products', product.id]);   // altijd een array!
  }
}

