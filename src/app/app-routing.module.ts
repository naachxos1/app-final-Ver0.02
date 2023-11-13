import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AsignarUsuarioPage } from './asignar-usuario/asignar-usuario.page'; 

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asignar-usuario',
    loadChildren: () => import('./asignar-usuario/asignar-usuario.module').then( m => m.AsignarUsuarioPageModule)
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./app1/pages/auth/sing-up/sing-up.module').then( m => m.SingUpPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./app1/pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./app1/pages/home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./app1/pages/profile/profile.module').then( m => m.ProfilePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
