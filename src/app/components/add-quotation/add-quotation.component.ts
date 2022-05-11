import { Component, OnInit } from '@angular/core';
import { QuotationsService } from 'src/app/serivce/quotations.service';

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.css'],
})
export class AddQuotationComponent implements OnInit {

  listQuotation: any = [];

  quotation: string = '';
  author: string = '';
  modelCard: string = '';

  constructor(private service: QuotationsService) {}

  addQuotation() {
    const dataQuotation = {
      quotation: this.quotation,
      author: this.author,
      modelCard: this.modelCard
    };
    this.service.add(dataQuotation);
    this.clearInputs();
  }
  clearInputs() {
    this.quotation = '';
    this.author = '';
  }

  ngOnInit(): void {}
}
