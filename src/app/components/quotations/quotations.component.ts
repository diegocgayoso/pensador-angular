import { QuotationsService } from './../../service/quotations.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class QuotationsComponent implements OnInit {
  listQuotations: any = [];

  constructor(private service: QuotationsService) {}

  ngOnInit(): void {
    this.listQuotations = this.service.quotations
  }
}
