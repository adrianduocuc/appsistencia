import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as qrcode from 'qrcode-generator'; // Asegúrate de importar la librería

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {

  idCurso = '';
  nombreCurso = '';
  codigoCurso = '';
  seccionCurso = '';
  qrDataURL: string = '';

  alumnos = [
    { rut: "1-1", nombre: "Diego Cares", estado: "ausente" },
    { rut: "1-2", nombre: "Katherine Rubilar", estado: "presente" },
    { rut: "1-3", nombre: "Adrian Rodriguez", estado: "presente" },
    { rut: "1-4", nombre: "Maximiliano Toledo", estado: "ausente" },
    { rut: "1-5", nombre: "Dieguito Maradona", estado: "presente" }
  ];

  constructor(private activaroute: ActivatedRoute, private router: Router) {
    this.activaroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombreCurso = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.idCurso = this.router.getCurrentNavigation()?.extras.state?.['id'];
        this.codigoCurso = this.router.getCurrentNavigation()?.extras.state?.['codigo'];
        this.seccionCurso = this.router.getCurrentNavigation()?.extras.state?.['seccion'];
      }
    });
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
  }

  isQRModalOpen = false;

  openQRModal() {
    this.isQRModalOpen = true;
  }

  closeQRModal() {
    this.isQRModalOpen = false;
  }
}
