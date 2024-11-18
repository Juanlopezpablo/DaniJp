import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { crearuserpage } from './crearuser.page';

const routes: Routes = [
  {
    path: '',
    component: crearuserpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearuserPageRoutingModule {}
