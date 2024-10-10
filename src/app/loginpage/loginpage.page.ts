import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(private router: Router, private alertController: AlertController, private authService: AuthserviceService) { }

  ngOnInit() { }

  navegarExtras() {
    // Verifica si el formulario es válido
    if (this.usuarioForm.invalid) {
      this.presentAlert("Error Login", "Por favor completa todos los campos requeridos.");
      return;
    }

    // Creación del set de datos
    let setData: NavigationExtras = {
      state: {
        id: this.usuarioForm.value.user,
        pass: this.usuarioForm.value.pass
      }
    };

    /*const loginMap: { [key: string]: string } = {
      'prof:1234': '/menuprofesor',
      'estu:1234': '/menualumno'
    };

    const userPassKey = `${this.usuarioForm.value.user}:${this.usuarioForm.value.pass}`;
    if (loginMap[userPassKey]) {
      this.router.navigate([loginMap[userPassKey]], setData);
    } else {
      this.presentAlert("Error Login", "Usuario o contraseña no son válidos");
    }
  }*/

      try {
        //validar si es prof o est.
        if(this.usuarioForm.value.user == "prof" && this.usuarioForm.value.pass == "1234"){
          //cambiar el estado del authService..
          this.authService.login();
          this.router.navigate(['/menuprofesor'],setData);
        }else if (this.usuarioForm.value.user == "estu" && this.usuarioForm.value.pass =="1234"){
          //cambiar el estado del authservice...
          this.authService.login();
          this.router.navigate(['/menualumno'],setData);
        }else {
          this.presentAlert("Error login", "usuario o la contraseña son incorrecto");
        }

      } catch (error:any) {
        this.presentAlert("Error login",error);
      }
    }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Info Login',
      subHeader: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
