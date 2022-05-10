import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.css'],
})
export class AddQuotationComponent implements OnInit {
  @Output() submitQuote = new EventEmitter();

  listQuotation: any = [];

  quotation: string = '';
  author: string = '';
  modelCard: string = '';

  constructor() {}

  addQuotation() {
    const dataQuotation = {
      quotation: this.quotation,
      author: this.author,
      modelCard: this.modelCard
    };
    this.submitQuote.emit(dataQuotation);
    this.listQuotation.push(dataQuotation);
    console.table(this.listQuotation);
    this.clearInputs();
  }
  clearInputs() {
    this.quotation = '';
    this.author = '';
  }

  ngOnInit(): void {}
}
