import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminKcLayoutRoutes } from './admin-kc-layout.routing';
import { RegKlinikuComponent } from '../reg-kliniku/reg-kliniku.component';
import { RegAdminComponent } from '../reg-admin/reg-admin.component';
import { ListaRegZahtevaComponent } from '../lista-reg-zahteva/lista-reg-zahteva.component';
import { SifLekovaComponent } from '../sif-lekova/sif-lekova.component';
import { SigDijagnozaComponent } from '../sig-dijagnoza/sig-dijagnoza.component';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownListModule } from 'ngx-dropdown-list';

import { ComponentsModule } from '../components/components.module';
import {AdminKcLayoutComponent} from './admin-kc-layout.component';
import {WelcomePageComponent} from '../welcome-page/welcome-page.component';
import {ProfileComponent} from '../profile/profile.component';
import {ForbiddenComponent} from '../forbidden/forbidden.component';
import {KreirajKartonComponent} from '../kreiraj-karton/kreiraj-karton.component';
import {ModalModule} from 'ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminKcLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModule,
    ReactiveFormsModule,
    DropdownListModule,
    ModalModule,
  ],
  declarations: [
    RegKlinikuComponent,
    RegAdminComponent,
    ListaRegZahtevaComponent,
    SifLekovaComponent,
    SigDijagnozaComponent,
    WelcomePageComponent,
    ProfileComponent,
    KreirajKartonComponent,

  ],
  bootstrap: [ SigDijagnozaComponent
  ]
})

export class AdminKcLayoutModule { }
