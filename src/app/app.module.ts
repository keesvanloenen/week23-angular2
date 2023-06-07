import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CamelCasePipe } from 'src/pipes/camel-case.pipe';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';

@NgModule({
  declarations: [   // components, directives, pipes
    AppComponent,
    CamelCasePipe,
    LifecycleComponent,
    LifecycleDemoComponent,
  ],
  imports: [        // welke modules wil ik importeren om uit die module
  BrowserModule,   // components, directives, pipes te kunnen gebruiken
  FormsModule,
  ],
  providers: [],    // DI (old-style)
  bootstrap: [AppComponent]
})
export class AppModule { }
