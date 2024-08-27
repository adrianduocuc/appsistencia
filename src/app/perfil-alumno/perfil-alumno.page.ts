import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
  isAlertOpen = false;
  alertButtons = ['Volver'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
