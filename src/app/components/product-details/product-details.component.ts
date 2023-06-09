import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // id!: number;
  product$!: Observable<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    // this.productService.getProduct(this.id).subscribe((product) => {
    //   console.log(product);
      
    // });

    this.activatedRoute.params.subscribe((params: Params) => {
      const id = parseInt(params['id']);
      this.product$ = this.productService.getProduct(id);
    })
  }
}
