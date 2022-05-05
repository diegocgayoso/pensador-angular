import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
