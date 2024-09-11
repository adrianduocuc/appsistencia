import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private router: Router, private alertController: AlertController) { }

  navegarExtras() {
    const user = this.usuarioForm.value.user;
    const pass = this.usuarioForm.value.pass;

    // Redirección condicional basada en las credenciales
    if (user === 'prof' && pass === '1234') {
      // Usuario es profesor
      let setData: NavigationExtras = {
        state: {
          id: user,
          role: 'profesor'
        }
      };
      console.log('Navegando a pagina-pp con datos:', setData);
      this.router.navigate(['/pagina-pp'], setData);
    } else if (user === 'estu' && pass === '1234') {
      // Usuario es estudiante
      let setData: NavigationExtras = {
        state: {
          id: user,
          role: 'estudiante'
        }
      };
      console.log('Navegando a pagina-pp con datos:', setData);
      this.router.navigate(['/home'], setData);
    } else {
      // Credenciales incorrectas
      this.presentAlert("Error Login", "Usuario o la contraseña son incorrectos");
    }
  }

  // Función que muestra una alerta
  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Info Login',
      subHeader: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {}
}
