import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaginaPPPageModule } from './pagina-pp/pagina-pp.module';
import { guardGuard } from './guard/guard.guard';


const routes: Routes = [
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule),
    
  },
  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },
  {
    path: 'pagina-pp',
    loadChildren: () => import('./pagina-pp/pagina-pp.module').then( m => m.PaginaPPPageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [ guardGuard ]
  },

  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: 'escaneado',
    loadChildren: () => import('./escaneado/escaneado.module').then( m => m.EscaneadoPageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: 'detalle-curso',
    loadChildren: () => import('./detalle-curso/detalle-curso.module').then( m => m.DetalleCursoPageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: 'menuprofesor',
    loadChildren: () => import('./menuprofesor/menuprofesor.module').then( m => m.MenuprofesorPageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: 'menualumno',
    loadChildren: () => import('./menualumno/menualumno.module').then( m => m.MenualumnoPageModule),
    canActivate: [ guardGuard ]
  },
  {
    path: '**',
    loadChildren: () => import('./pageerror404/pageerror404.module').then( m => m.Pageerror404PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
