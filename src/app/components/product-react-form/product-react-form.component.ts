import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-react-form',
  templateUrl: './product-react-form.component.html',
  styleUrls: ['./product-react-form.component.scss']
})
export class ProductReactFormComponent implements OnInit {
  ngOnInit(): void {
    this.addProductForm.controls.name.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((val) => console.log(val))
  }
  @Output() productAdded = new EventEmitter<Product>();

  addProductForm = new FormGroup({  // 👈 houdt waarde én validatie status bij voor een groep controls
    name: new FormControl(),        // 👈 houdt waarde én validatie status bij voor één individueel control
    price: new FormControl(),
    photo: new FormControl(),
  });

  addProduct() {
    this.productAdded.emit(this.addProductForm.value as Product);
  }


}
