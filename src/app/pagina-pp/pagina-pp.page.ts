import { Component, OnInit } from '@angular/core';
import { NavigationExtras , ActivatedRoute , Router} from '@angular/router';

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
           ,{id:3,nombre:'ingenieria',codigo:'APY2265',seccion:'-012V'}
           ,{id:4,nombre:'Software',codigo:'APY3444',seccion:'-013V'}];



  constructor(private activaroute: ActivatedRoute, private router: Router) {
    this.activaroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user=this.router.getCurrentNavigation()?.extras.state?.['id'];
        console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
      }
    });
  }

verDetalle(nombre:string, id:number , codigo:string, seccion:string){
  let setData: NavigationExtras = {
    state: {
      nombre:nombre,
      id:id,
      codigo:codigo,
      seccion:seccion
    }
  };

  this.router.navigate(['/detalle-curso'], setData);
}

/*   isQRModalOpen = false;
  constructor() { }

  openQRModal() {
    this.isQRModalOpen = true;
  }

  closeQRModal() {
    this.isQRModalOpen = false;
  } */

  ngOnInit() {
  }

}
