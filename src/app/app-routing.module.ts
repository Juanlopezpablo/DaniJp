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
    path: 'crear-usuario',
    loadChildren: () => import('./page/crearuser/crearuser.module').then( m => m.crearusercageModule)
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
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'lista-vehiculos',
    loadChildren: () => import('./page/lista-vehiculos/lista-vehiculos.module').then( m => m.ListaVehiculosPageModule)
  },
  {
    path: 'testapi',
    loadChildren: () => import('./page/testapi/testapi.module').then( m => m.TestapiPageModule)
  },  {
    path: 'contacto',
    loadChildren: () => import('./page/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./page/sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }