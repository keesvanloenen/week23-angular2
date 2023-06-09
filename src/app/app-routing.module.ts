import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'lifecycle', component: LifecycleDemoComponent },
  { path: 'hooks', redirectTo: 'lifecycle' },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
