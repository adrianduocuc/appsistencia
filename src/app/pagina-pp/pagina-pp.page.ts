import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pagina-pp',
  templateUrl: './pagina-pp.page.html',
  styleUrls: ['./pagina-pp.page.scss'],
})
export class PaginaPPPage implements OnInit {

  user = "";
  now = new Date();
  fecha = this.now.toLocaleString();

  cursos = [{id:1,nombre:'POO',codigo:'APY4465',seccion:'-010V'}
           ,{id:2,nombre:'calidad',codigo:'APY3365',seccion:'-011V'}
           ,{id:3,nombre:'ingenieria',codigo:'APY2265',seccion:'-012V'}];
  router: any;

verDetalle(id:number){
  let setData: NavigationExtras = {
    state: {
      curso:id
    }
  };

  this.router.navigate(['asignatura'], setData);
}

  isQRModalOpen = false; 
  constructor() { }

  openQRModal() {
    this.isQRModalOpen = true;
  }

  closeQRModal() {
    this.isQRModalOpen = false;
  }

  ngOnInit() {
  }

}
