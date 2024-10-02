import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprofesor',
  templateUrl: './menuprofesor.page.html',
  styleUrls: ['./menuprofesor.page.scss'],
})
export class MenuprofesorPage implements OnInit {

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
    this.router.navigate(['/pagina-pp']);
  }
}
