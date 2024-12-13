import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { PhotoComponent } from './component/photo/photo.component';

const redireccionarLogin = () => redirectUnauthorizedTo(['/Login']);
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crearuser',
    loadChildren: () => import('./page/crearuser/crearuser.module').then( m => m.CrearUserPageModule)
  },
  {
    path: 'principal',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./page/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'apitest',
    loadChildren: () => import('./page/apitest/apitest.module').then( m => m.ApitestPageModule)
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  
  {
    path: 'agregar-vehiculo',
    loadChildren: () => import('./page/agregar-vehiculo/agregar-vehiculo.module').then( m => m.AgregarVehiculoPageModule)
  },
  {
    path: 'lista-vehiculos',
    loadChildren: () => import('./page/lista-vehiculos/lista-vehiculos.module').then( m => m.ListaVehiculosPageModule)
  },
  {
    path: 'testapi',
    loadChildren: () => import('./page/testapi/testapi.module').then( m => m.TestapiPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./page/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'ver-vehiculos',
    loadChildren: () => import('./page/ver-vehiculos/ver-vehiculos.module').then( m => m.VerVehiculosPageModule)
  },
  
  {
    path: 'agregar-viaje',
    loadChildren: () => import('./page/agregar-viaje/agregar-viaje.module').then( m => m.AgregarViajePageModule)
  },
  {
    path: 'ver-viajes',
    loadChildren: () => import('./page/ver-viajes/ver-viajes.module').then( m => m.VerViajesPageModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
 



  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
