import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { CarService } from './cars/carservice';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CarService ]
})
export class AppModule { }
