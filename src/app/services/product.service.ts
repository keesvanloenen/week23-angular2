import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/models/product";

@Injectable({ providedIn: 'root' })
export class ProductService {
    products: Product[] = [];   // hulparray
    private URL = 'http://localhost:3000/dranken';

    subject = new Subject<Product[]>;

    constructor(private httpClient: HttpClient) {}
    // private httpClient = inject(HttpClient);    // Angular 16
    
    getAll(): Observable<Product[]> {
      // return this.httpClient
      //   .get<Product[]>(this.URL);
      this.httpClient
        .get<Product[]>(this.URL)
        .subscribe((products: Product[]) => {
          console.log('getAll()')
          this.products = products;     // vul hulparray
          this.subject.next(products);  // voeg toe aan stream
        });

      return this.subject;
    }

    addProduct(product: Product) {
      this.httpClient
        .post<Product>(this.URL, product)
        .subscribe((product: Product) => {
          console.log('addProduct()');
          this.products.push(product);    // vul hulparray
          this.subject.next(this.products);
        });
    }
  
    deleteProduct(product: Product) {
      this.httpClient
        .delete<Product>(`${this.URL}/${product.id}`)
        .subscribe(() => {
          console.log('deleteProduct()');
          this.products = this.products.filter((p) => p !== product);
          this.subject.next(this.products);
        });
    }
}