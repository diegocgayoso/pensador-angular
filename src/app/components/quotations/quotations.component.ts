import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css'],
})
export class QuotationsComponent implements OnInit {
  @Input() listQuotations: any = [];
  constructor() {}

  ngOnInit(): void {}
}
