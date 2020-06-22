import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMapWebPageRoutingModule } from './view-map-web-routing.module';

import { ViewMapWebPage } from './view-map-web.page';

import { AppMaterialModule } from '../../app-material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMapWebPageRoutingModule,
    AppMaterialModule
  ],
  declarations: [ViewMapWebPage]
})
export class ViewMapWebPageModule {}
