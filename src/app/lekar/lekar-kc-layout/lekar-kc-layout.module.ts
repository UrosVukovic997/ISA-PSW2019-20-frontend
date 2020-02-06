import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LekarKcLayoutRoutes } from './lekar-kc-layout.routing';
import { OdsustvoOdmorComponent } from '../generisanje-odsustva-odmora/odsustvo-odmor.component';
import { ListaPacijenataComponent } from '../lista-pacijenata/lista-pacijenata.component';
import { LicniProfilLekaraComponent } from '../licni-profil/licni-profil.component';
import { RadniKalendarComponent } from '../radni-kalendar/radni-kalendar.component';
import { ZakazivanjePregledaComponent } from '../zakazivanje-pregleda/zakazivanje-pregleda.component';
import { ZapocniPregledComponent } from '../zapocni-pregled/zapocni-pregled.component';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ComponentsLekarModule } from '../components/components.module';
import {LekarKcLayoutComponent} from './lekar-kc-layout.component';
import {DropdownListModule} from 'ngx-dropdown-list';
import {KartonLekarComponent} from '../karton-lekar/karton-lekar.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LekarKcLayoutRoutes),
        FormsModule,
        ChartsModule,
        ToastrModule.forRoot(),
        NgbModule,
        ComponentsLekarModule,
        ReactiveFormsModule,
        DropdownListModule
    ],
  declarations: [
    ListaPacijenataComponent,
    OdsustvoOdmorComponent,
    LicniProfilLekaraComponent,
    RadniKalendarComponent,
    ZakazivanjePregledaComponent,
    ZapocniPregledComponent,
    KartonLekarComponent,
  ]
})

export class LekarKcLayoutModule { }
