import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CamelCasePipe } from 'src/pipes/camel-case.pipe';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [   // components, directives, pipes
    AppComponent,
    CamelCasePipe,
    LifecycleComponent,
    LifecycleDemoComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
  ],
  imports: [        // welke modules wil ik importeren om uit die module
  BrowserModule,   // components, directives, pipes te kunnen gebruiken
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  ],
  providers: [      // DI (old-style), services...
    // { provide: ProductService, useClass: ProductService },
    // ProductService
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
