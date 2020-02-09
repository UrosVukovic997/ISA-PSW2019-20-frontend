import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { RegComponent} from '../app/registracija/reg/reg.component';
import {LogovanjeComponent} from './registracija/logovanje/logovanje.component';

import { LekarKcLayoutComponent } from './lekar/lekar-kc-layout/lekar-kc-layout.component';
import {PotvrdaComponent} from './administrator-kc/potvrda/potvrda.component';
import {ForbiddenComponent} from './administrator-kc/forbidden/forbidden.component';
import {SestraLayoutComponent} from './sestra-home/sestra-layout/sestra-layout.component';
import {PacijentLayoutModule} from './pacijent/pacijent-layout/pacijent-layout.module';
import {PacijentLayoutComponent} from './pacijent/pacijent-layout/pacijent-layout.component';
import {AdminKlinikeLayoutComponent} from './admin-klinike/admin-klinike-layout/admin-klinike-layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'logovanje',
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
  { path: 'aktivirajNalog/:id', component: PotvrdaComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'sestra',
    component: SestraLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './sestra-home/sestra-layout/sestra-layout.module#SestraLayoutModule'
      }]
    },
  {
    path: 'admin-klinike',
    component: AdminKlinikeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './admin-klinike/admin-klinike-layout/admin-klinike-layout.module#AdminKlinikeLayoutModule'
      }]},
    {
    path: 'lekar-kc',
    component: LekarKcLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './lekar/lekar-kc-layout/lekar-kc-layout.module#LekarKcLayoutModule'
        }]},
  { path: 'aktivirajNalog/:id', component: PotvrdaComponent },
  {path: 'profilPacijenta',
  component: PacijentLayoutComponent,
  children: [
    {
      path: '',
      loadChildren:  './pacijent/pacijent-layout/pacijent-layout.module#PacijentLayoutModule'
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
