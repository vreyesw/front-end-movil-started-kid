import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'view-map',
    loadChildren: () => import('./page/view-map-mobil/view-map-mobil.module').then(m => m.ViewMapPageModule)
  },
  {
    path: 'view-map-web',
    loadChildren: () => import('./page/view-map-web/view-map-web.module').then( m => m.ViewMapWebPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
