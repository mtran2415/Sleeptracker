import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewLoggedDataPage } from './view-logged-data.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLoggedDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewLoggedDataPage]
})
export class ViewLoggedDataPageModule {}
