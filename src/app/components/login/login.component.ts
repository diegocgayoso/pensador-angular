import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any = [];

  username: string = '';
  password: string = '';

  constructor(private serviceAuth: LoginService) { }

  ngOnInit(): void {
    this.users = this.serviceAuth.users;
  }

  login(){
    const usuario = {
      username: this.username,
      password: this.password
    }
    // console.log(usuario);
    this.serviceAuth.login(usuario)
  }
}
