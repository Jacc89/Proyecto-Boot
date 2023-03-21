import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) =>{
        console.log('Respuesta de login: ', response);
        sessionStorage.setItem('token', response.token);
      },
      (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
      () => console.info('Se ha completado la llamada  de login a reqres')
    );
    
  }

}
