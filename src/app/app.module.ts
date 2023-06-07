import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CamelCasePipe } from 'src/pipes/camel-case.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/pipes/filter.pipe';

@NgModule({
  declarations: [   // components, directives, pipes
    AppComponent,
    FilterPipe,
  ],
  imports: [        // welke modules wil ik importeren om uit die module
  BrowserModule,   // components, directives, pipes te kunnen gebruiken
  FormsModule,
  CamelCasePipe,
  ],
  providers: [],    // DI (old-style)
  bootstrap: [AppComponent]
})
export class AppModule { }
