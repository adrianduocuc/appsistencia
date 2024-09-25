import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaginaPPPageModule } from './pagina-pp/pagina-pp.module';

const routes: Routes = [
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-pp',
    pathMatch: 'full'
  },
  {
    path: 'pagina-pp',
    loadChildren: () => import('./pagina-pp/pagina-pp.module').then( m => m.PaginaPPPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'escaneado',
    loadChildren: () => import('./escaneado/escaneado.module').then( m => m.EscaneadoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
