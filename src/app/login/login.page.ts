import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
