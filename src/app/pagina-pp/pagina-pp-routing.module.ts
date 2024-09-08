import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPPPage } from './pagina-pp.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPPPageRoutingModule {}
