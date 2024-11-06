import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as qrcode from 'qrcode-generator'; // Asegúrate de importar la librería
import { ConsumoapiService } from '../service/consumoapi.service';
@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {

  idCurso: number = 0;
  nombreCurso = '';
  codigoCurso = '';
  seccionCurso = '';
  qrDataURL: string = '';

  alumnos : any[] = [];

  constructor(private consumoAPI: ConsumoapiService, private activaroute: ActivatedRoute, private router: Router) {
    this.activaroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombreCurso = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.idCurso = this.router.getCurrentNavigation()?.extras.state?.['id'];
        this.codigoCurso = this.router.getCurrentNavigation()?.extras.state?.['codigo'];
        this.seccionCurso = this.router.getCurrentNavigation()?.extras.state?.['seccion'];
      }
    });
  }
//metodo para mostrar alumnos
  mostrarAlumnos(){
    this.consumoAPI.obtenerAlumnosPorCursoPorProfesor(1,this.idCurso).subscribe((respuesta)=>{
      this.alumnos = respuesta;
    })
  }


  generateQRCode() {
    if (this.idCurso) {
      const fechaActual = new Date().toISOString().split('T')[0]; // Fecha en formato YYYY-MM-DD
      const data = `${this.codigoCurso}-${this.seccionCurso}`;

      let qr = qrcode(4, 'L'); // Genera el QR
      qr.addData(data);
      qr.make();
      this.qrDataURL = qr.createDataURL(4); // Genera la URL del QR
    }
  }

  ngOnInit() {
    this.generateQRCode();
    this.mostrarAlumnos();
  }

  isQRModalOpen = false;

  openQRModal() {
    this.isQRModalOpen = true;
  }

  closeQRModal() {
    this.isQRModalOpen = false;
  }
}
