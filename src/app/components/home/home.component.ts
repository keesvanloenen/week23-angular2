import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   constructor(private router: Router) {}

  onProducts() {
    // complexe berekening, we gaan naar de backend, slaan daar iets op en willen daarna naar producten
    this.router.navigate(['/products']); // altijd een array!
  }
}
