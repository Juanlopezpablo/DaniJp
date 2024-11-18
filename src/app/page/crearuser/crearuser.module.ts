import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearuserPageRoutingModule } from './crearuser-routing.module';

import { crearuserpage } from './crearuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearuserPageRoutingModule
  ],
  declarations: [crearuserpage]
})
export class crearusercageModule {}
