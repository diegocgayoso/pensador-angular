import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.molude';

import { AppComponent } from './app.component';
import { AddQuotationComponent } from './components/add-quotation/add-quotation.component';
import { QuotationsComponent } from './components/quotations/quotations.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuotationComponent,
    QuotationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
