import { Component } from '@angular/core';
import { QuotationsService } from './serivce/quotations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pensador';

  dataQuotations: any = [];

  constructor(private service: QuotationsService){}

  add($event: any) {
    this.service.add($event)
  }
}
