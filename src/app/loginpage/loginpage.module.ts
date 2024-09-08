import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginpagePageRoutingModule } from './loginpage-routing.module';

import { LoginPage } from './loginpage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
/**
 * Represents the module for the login page.
 */
export class LoginpagePageModule {}
