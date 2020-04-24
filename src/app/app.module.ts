import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDemoComponent } from './stock-demo/stock-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
