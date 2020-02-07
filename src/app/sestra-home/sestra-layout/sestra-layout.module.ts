import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModuleSestra} from '../components/components.module';
import {DropdownListModule} from 'ngx-dropdown-list';

import { SestraLayoutRoutes } from '../sestra-layout/sestra-layout.routing';
import {KalendarComponent} from '../../kalendar/kalendar/kalendar.component';
import {KalendarModule} from '../../kalendar/kalendar.module';
import {PacijentListComponent} from '../pacijent-list/pacijent-list.component';
import {ProfilSestraComponent} from '../profil-sestra/profil-sestra.component';
import {AdminKcLayoutModule} from '../../administrator-kc/admin-kc-layout/admin-kc-layout.module';
import {KartonSestraComponent} from '../karton-sestra/karton-sestra.component';
import {OdmorOdsustvoSestraComponent} from '../odmor-odsustvo-sestra/odmor-odsustvo-sestra.component';
import {OveraReceptaComponent} from '../overa-recepta/overa-recepta.component';



@NgModule({
  declarations: [PacijentListComponent, ProfilSestraComponent,
    KartonSestraComponent, OdmorOdsustvoSestraComponent, OveraReceptaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SestraLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModuleSestra,
    ReactiveFormsModule,
    DropdownListModule,
    KalendarModule,
    AdminKcLayoutModule
  ]
})
export class SestraLayoutModule { }
