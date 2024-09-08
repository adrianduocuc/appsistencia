import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NavigationExtras} from '@angular/router' ;
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    usuario: "",
    password: ""
  };

  constructor(private router: Router) { }
  
  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
   });

   ngOnInit() {
  }


  navegar(){
    this.router.navigate(['/perfil-docente']); 
  }
  navegarExtras(){
    let setData: NavigationExtras = {
      state: {
        id: this.usuario.value.user,
        user: this.usuario.value.pass
      }
      };

      this.router.navigate(['/home'],setData);
    }
    

}
