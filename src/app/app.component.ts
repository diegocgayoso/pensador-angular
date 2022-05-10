import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pensador';

  dataQuotations: any = [];

  add(evento: any) {
    this.dataQuotations.push(evento)
    console.log(evento)
  }
}
