import { Component } from '@angular/core';
import {Router, NavigationExtras,ActivatedRoute} from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario ="";

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
  
     
  
      this.usuario= this.router.getCurrentNavigation()?.extras.state?.['user'];
  
      console.log(this.router.getCurrentNavigation()?.extras.state?.['pass']);
  
     
  
    });
  
   }
}
