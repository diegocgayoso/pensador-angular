import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.css']
})
export class AddQuotationComponent implements OnInit {

  listQuotation: any = [];

  quotation: string = '';
  author: string = '';

  constructor() { }

  addQuotation(){
    const dataQuotation = {
      quotation: this.quotation,
      author: this.author,
      data: new Date()
    }
    this.listQuotation.push(dataQuotation)
    console.table(this.listQuotation);
    this.clearInputs();
  }
  clearInputs(){
    this.quotation = '';
    this.author = '';
  }

  ngOnInit(): void {
  }

}
