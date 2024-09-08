import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Add the missing imports

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

