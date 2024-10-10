import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private authenticated = false;

  constructor() { }

  isLoggedIn(){
    return this.authenticated; // Estado que retorna la clase;
  }

  login(){
    this.authenticated = true; // cambia estado si el login es exitoso
  }

  logout(){
    this.authenticated = false; // cambia el estado para salir de la app
  }
}
