import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotationsService {
  private listQuotations: any[];

  constructor() {
    this.listQuotations = [
      {
        quotation: 'Tudo passa',
        author: 'Kayuá',
        modelCard: 'class1',
      },
      {
        quotation: 'Tudo passa',
        author: 'Kayuá',
        modelCard: 'class2',
      },
      {
        quotation: 'Tudo passa',
        author: 'Kayuá',
        modelCard: 'class3',
      },
    ];
  }

  get quotations() {
    return this.listQuotations;
  }

  add(quotation: any) {
    this.datar(quotation)
    this.listQuotations.push(quotation);
    console.table(this.listQuotations);
  }

  private datar(quotation: any){
    quotation.data = new Date();
  }
}
