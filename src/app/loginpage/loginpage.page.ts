import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import type { QueryList } from '@angular/core';
import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { usuario } from '../modelo/usuario';
import { perfil } from '../modelo/perfil';
import { curso } from '../modelo/curso';
import { AuthserviceService } from '../service/authservice.service';
import { ConsumoapiService } from '../service/consumoapi.service';
import { AlertController } from '@ionic/angular';
@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.page.html',
    styleUrls: ['./loginpage.page.scss'],

})
export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  textUser = 'Usuario';
  desUser = 'Ingresa tu usuario';
  textPass = 'Contraseña';
  desPass = 'Ingresa tu contraseña';
  ingresar = 'Entrar';


  private animation!: Animation;
  private typeuser!: usuario;
  private typePerfil!: perfil;

  usuarioForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  apiLogin() {
    this.consumoapi.login(this.usuarioForm.value.user!, this.usuarioForm.value.pass!).subscribe(
      (response) => {
        this.typeuser = response.body as unknown as usuario;

        if (response.status === 200) {
          // Configuración de datos para la navegación
          const setData: NavigationExtras = {
            state: {
              id: this.typeuser.id,
              user: this.typeuser.user,
              correo: this.typeuser.correo,
              nombre: this.typeuser.nombre,
              tipoPerfil: this.typeuser.tipoPerfil,
            }
          };

          // Validación de tipo de perfil y redirección
          if (this.typeuser.tipoPerfil === 1) {
            this.authService.login();
            this.router.navigate(['/menuprofesor'], setData); // Navegación a menú profesor
          } else if (this.typeuser.tipoPerfil === 2) {
            this.authService.login();
            this.router.navigate(['/menualumno'], setData); // Navegación a menú alumno
          } else {
            // Manejo de un tipo de perfil no esperado
            this.presentAlert('Error', 'Tipo de usuario no reconocido');
          }
        } else if (response.status === 401) {
          this.presentAlert('Error de autenticación', 'Usuario o contraseña incorrectos');
        }
      },
      (error) => {
        console.error('Error en inicio de sesión:', error);
        this.presentAlert('Error', 'Hubo un problema al intentar iniciar sesión. Inténtelo nuevamente.');
      }
    );
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


  constructor(private router: Router,
    private alertController: AlertController,
    private authService: AuthserviceService,
    private consumoapi: ConsumoapiService,
    private animationCtrl: AnimationController) { }

  ngOnInit() { }
}
