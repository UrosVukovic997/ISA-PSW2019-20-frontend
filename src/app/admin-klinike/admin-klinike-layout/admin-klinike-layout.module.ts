import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminKlinikeLayoutRoutes } from './admin-klinike-layout.routing';
import { ProfilKlinikeComponent } from '../profil-klinike/profil-klinike.component';
import { DefSlobTermineComponent } from '../def-slob-termine/def-slob-termine.component';
import { PoslovanjeComponent } from '../poslovanje/poslovanje.component';
import { PretrazujComponent } from '../pretrazuj/pretrazuj.component';
import { ProfilAdminaComponent } from '../profil-admina/profil-admina.component';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownListModule } from 'ngx-dropdown-list';

import { ComponentsAdminKlinikeModule } from '../components/components.module';
import {PretragaSalaComponent} from '../pretraga-sala/pretraga-sala.component';
import {OdsustvoOdmoriComponent} from '../odsustvo-odmori/odsustvo-odmori.component';

/*
import {WelcomePageComponent} from '../welcome-page/welcome-page.component';
import {ProfileComponent} from '../profile/profile.component';
import {ForbiddenComponent} from '../forbidden/forbidden.component';
*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminKlinikeLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsAdminKlinikeModule,
    ReactiveFormsModule,
    DropdownListModule,
  ],
  declarations: [
    ProfilKlinikeComponent,
    DefSlobTermineComponent,
    PoslovanjeComponent,
    PretrazujComponent,
    ProfilAdminaComponent,
    PretragaSalaComponent,
    OdsustvoOdmoriComponent
  ],
  exports: []
})

export class AdminKlinikeLayoutModule { }
