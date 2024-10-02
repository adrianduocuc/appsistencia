import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pageerror404PageRoutingModule } from './pageerror404-routing.module';

import { Pageerror404Page } from './pageerror404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pageerror404PageRoutingModule
  ],
  declarations: [Pageerror404Page]
})
export class Pageerror404PageModule {}
