import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pageerror404Page } from './pageerror404.page';

const routes: Routes = [
  {
    path: '',
    component: Pageerror404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pageerror404PageRoutingModule {}
