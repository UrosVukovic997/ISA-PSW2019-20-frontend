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
import {KartonModule} from '../../karton/karton.module';
import {ProfilSestraComponent} from '../profil-sestra/profil-sestra.component';



@NgModule({
  declarations: [PacijentListComponent, ProfilSestraComponent],
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
    KartonModule,
  ]
})
export class SestraLayoutModule { }
