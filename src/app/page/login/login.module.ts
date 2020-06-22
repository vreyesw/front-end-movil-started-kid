import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

/** importar los modulos de angular material que se utilizaran */
import { AppMaterialModule } from '../../app-material.module';
import { SideNavComponent } from '../../component/side-nav/side-nav.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  entryComponents: [SideNavComponent],
  declarations: [LoginPage, SideNavComponent]
})
export class LoginPageModule { }
