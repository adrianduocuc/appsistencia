import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { MenualumnoPageRoutingModule } from './menualumno-routing.module';

import { MenualumnoPage } from './menualumno.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MenualumnoPageRoutingModule
  ],
  declarations: [MenualumnoPage]
})
export class MenualumnoPageModule {
  

}
