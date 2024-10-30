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

  cursos = [
    { id: 1, nombre: 'POO', codigo: 'APY4465', seccion: '-010V' },
    { id: 2, nombre: 'calidad', codigo: 'APY3365', seccion: '-011V' },
    { id: 3, nombre: 'ingenieria', codigo: 'APY2265', seccion: '-012V' },
    { id: 4, nombre: 'Software', codigo: 'APY3444', seccion: '-013V' }
  ];

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

//  this.titulo = res[2].title;
obtenerData(){
  this.consumoAPI.getPosts().subscribe((respuesta)=>{
    this.titulo = respuesta[65].title;;
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
