import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMapPageRoutingModule } from './view-map-mobil-routing.module';

import { ViewMapPage } from './view-map-mobil.page';

import { AppMaterialModule } from '../../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMapPageRoutingModule,
    AppMaterialModule
  ],
  declarations: [ViewMapPage]
})
export class ViewMapPageModule {}
