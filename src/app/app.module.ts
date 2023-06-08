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

@NgModule({
  declarations: [   // components, directives, pipes
    AppComponent,
    CamelCasePipe,
    LifecycleComponent,
    LifecycleDemoComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [        // welke modules wil ik importeren om uit die module
  BrowserModule,   // components, directives, pipes te kunnen gebruiken
  FormsModule,
  HttpClientModule,
  ],
  providers: [      // DI (old-style), services...
    // { provide: ProductService, useClass: ProductService },
    // ProductService
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
