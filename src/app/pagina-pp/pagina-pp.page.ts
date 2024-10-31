// pagina-pp.page.ts
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { ConsumoapiService } from '../service/consumoapi.service';

@Component({
  selector: 'app-pagina-pp',
  templateUrl: './pagina-pp.page.html',
  styleUrls: ['./pagina-pp.page.scss'],
})
export class PaginaPPPage implements OnInit {
  titulo:string = "";
  user = "";
  now = new Date();
  fecha = this.now.toLocaleString();

  //Crar listado de cursos
  cursos : any[] = [];

  constructor(private consumoAPI: ConsumoapiService, private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user = this.router.getCurrentNavigation()?.extras.state?.['id'];
        console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
      }
    })
  }


  ngOnInit() : void {
    this.obtenerData();
  }

//  Crear Metodo para consumir el service
obtenerData(){
  this.consumoAPI.obtenerCursosPorProfesor(1).subscribe((respuesta)=>{
    this.cursos = respuesta;
  })
}

  verDetalle(nombre: string, id: number, codigo: string, seccion: string) {
    let setData: NavigationExtras = {
      state: {
        nombre: nombre,
        id: id,
        codigo: codigo,
        seccion: seccion
      }
    };

    this.router.navigate(['/detalle-curso'], setData);
  }


}
