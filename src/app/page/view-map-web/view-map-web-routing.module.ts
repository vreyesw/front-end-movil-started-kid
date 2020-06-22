import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMapWebPage } from './view-map-web.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMapWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMapWebPageRoutingModule {}
