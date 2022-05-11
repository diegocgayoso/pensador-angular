import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotationsService } from 'src/app/service/quotations.service';

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

  constructor(private service: QuotationsService, private router: Router) {}

  addQuotation() {
    const dataQuotation = {
      quotation: this.quotation,
      author: this.author,
      modelCard: this.modelCard,
    };
    this.service.add(dataQuotation);
    this.router.navigateByUrl('quotations');
    this.clearInputs();
  }
  clearInputs() {
    this.quotation = '';
    this.author = '';
  }

  ngOnInit(): void {}
}
