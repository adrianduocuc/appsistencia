import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
    selector: 'app-menualumno',
    templateUrl: './menualumno.page.html',
    styleUrls: ['./menualumno.page.scss'],
    standalone: false
})
export class MenualumnoPage implements OnInit {

  nombreUsuario: string = '';  //
  photo: string | undefined; // Property to store the photo

  constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.nombreUsuario = navigation.extras.state['nombre'];
      console.log('usuario:', this.nombreUsuario);

    }
  }

  ngOnInit() {}

  goToPaginaPP() {
    this.router.navigate(['/home']);
  }


  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Calidad de la imagen
        allowEditing: false, // Deshabilitar edición de la imagen
        resultType: CameraResultType.DataUrl, // Obtener la imagen como URL base64
        source: CameraSource.Camera, // Usar directamente la cámara
      });

      this.photo = image.dataUrl; // Guardar la foto para mostrarla
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

}
