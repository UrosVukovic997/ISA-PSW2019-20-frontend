import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { RegComponent} from '../app/registracija/reg/reg.component';
import {LogovanjeComponent} from './registracija/logovanje/logovanje.component';

import { LekarKcLayoutComponent } from './lekar/lekar-kc-layout/lekar-kc-layout.component';
import {PotvrdaComponent} from './administrator-kc/potvrda/potvrda.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'lekar-kc',
    pathMatch: 'full',
  }, {
    path: 'admin-kc',
    component: AdminKcLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './administrator-kc/admin-kc-layout/admin-kc-layout.module#AdminKcLayoutModule'
      }]}
  , {
    path: 'registracija',
    component: RegComponent,
    children: [
    ]},
    {
    path: 'logovanje',
    component: LogovanjeComponent,
    children: [
    ]},
    {
    path: 'lekar-kc',
    component: LekarKcLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './lekar/lekar-kc-layout/lekar-kc-layout.module#LekarKcLayoutModule'
        }]},
  { path: 'aktivirajNalog/:id', component: PotvrdaComponent }

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
