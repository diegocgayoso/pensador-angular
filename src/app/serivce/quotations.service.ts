import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {

  private listQuotations: any[];

  constructor() {
    this.listQuotations = [];
  }

  get quotations() {
    return this.listQuotations;
  }

  add(quotation: any) {
    this.listQuotations.push(quotation);
    console.table(this.listQuotations)
  }
}
