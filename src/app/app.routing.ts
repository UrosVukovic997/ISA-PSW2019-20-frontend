import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-kc',
    pathMatch: 'full',
  }, {
    path: 'admin-kc',
    component: AdminKcLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './administrator-kc/admin-kc-layout/admin-kc-layout.module#AdminKcLayoutModule'
      }]}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
