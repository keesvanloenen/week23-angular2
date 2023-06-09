import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "src/models/product";

@Injectable({ providedIn: 'root' })
export class ProductService {
    // products: Product[] = [];   // hulparray
    private URL = 'http://localhost:3000/dranken';

    subject = new BehaviorSubject<Product[]>([]);

    constructor(private httpClient: HttpClient) {}
    // private httpClient = inject(HttpClient);    // Angular 16
    
    getAll(): Observable<Product[]> {
       this.httpClient
        .get<Product[]>(this.URL)
        .subscribe((products: Product[]) => {
          console.log('getAll()');
          this.subject.next(products);  // voeg toe aan stream
        });

      return this.subject.asObservable();
    }

    getProduct(id: number): Observable<Product> {
      return this.httpClient
        .get<Product>(`${this.URL}/${id}`);
    }

    addProduct(product: Product) {
      this.httpClient
        .post<Product>(this.URL, product)
        .subscribe((product: Product) => {
          console.log('addProduct()');
          this.subject.next([...this.subject.getValue(), product]);
        });
    }
  
    deleteProduct(product: Product) {
      this.httpClient
        .delete<Product>(`${this.URL}/${product.id}`)
        .subscribe(() => {
          console.log('deleteProduct()');
          const newProduct = this.subject.getValue().filter((p: Product) => p.id !== product.id);
          this.subject.next(newProduct);
        });
    }
}