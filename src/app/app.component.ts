import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pensador';
  showButton: boolean = false;

  constructor(private serviceAuth: LoginService){}

  ngOnInit(){
    this.serviceAuth.showButton.subscribe(
      show => this.showButton = show
    );
  }
}
