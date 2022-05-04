import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pensador';
  listQuotation: any = [];

  quotation: string = '';
  author: string = '';


  addQuotation(){
    const dataQuotation = {
      quotation: this.quotation,
      author: this.author,
      data: new Date()
    }
    this.listQuotation.push(dataQuotation)
    console.table(this.listQuotation);

  }
}
