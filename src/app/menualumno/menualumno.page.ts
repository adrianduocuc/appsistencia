import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menualumno',
  templateUrl: './menualumno.page.html',
  styleUrls: ['./menualumno.page.scss'],
})
export class MenualumnoPage implements OnInit {

  nombreUsuario: string = '';  //

  constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.nombreUsuario = navigation.extras.state['id'];
      console.log('usuario:', this.nombreUsuario);

    }
  }

  ngOnInit() {}

  goToPaginaPP() {
    this.router.navigate(['/home']);
  }
}
