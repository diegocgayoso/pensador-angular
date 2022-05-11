import { Router } from '@angular/router';
import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private listUsers: any[];
  private userAutenticado: boolean = false;

  showButton = new EventEmitter<boolean>()

  constructor(private router: Router) {
    this.listUsers = [
      {
        username: 'dihPensador',
        password: '123456',
      },
    ];
  }

  get users() {
    return this.listUsers;
  }

  login(usuario: any){
    console.log(usuario);

    if(usuario.username == 'dihPensador' && usuario.password == '123456'){
      this.userAutenticado = true;

      this.showButton.emit(true);
      this.router.navigateByUrl('quotations');
    } else {
      this.userAutenticado =  false;
      alert('Dados errados ou usuário não existe')
    }
  }

}
