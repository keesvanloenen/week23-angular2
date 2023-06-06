import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CamelCasePipe } from 'src/pipes/camel-case.pipe';

@NgModule({
  declarations: [   // components, directives, pipes
    AppComponent,
  ],
  imports: [        // welke modules wil ik importeren om uit die module
  BrowserModule,   // components, directives, pipes te kunnen gebruiken
  CamelCasePipe,
  ],
  providers: [],    // DI (old-style)
  bootstrap: [AppComponent]
})
export class AppModule { }
