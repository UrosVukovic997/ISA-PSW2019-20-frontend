import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PacijentLayoutComponent} from './pacijent-layout.component';
import {ProfilComponent} from '../profil/profil.component';
import {PacCompModule} from '../pac-comp/pac-comp.module';
import {RouterModule} from '@angular/router';
import {AdminKcLayoutRoutes} from '../../administrator-kc/admin-kc-layout/admin-kc-layout.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from '../../administrator-kc/components/components.module';
import {DropdownListModule} from 'ngx-dropdown-list';
import {PacijentLayoutRutes} from './pacijent-layout.routing';
import {KlinikePacijentaComponent} from '../klinike-pacijenta/klinike-pacijenta.component';



@NgModule({
  declarations: [
    PacijentLayoutComponent,
    ProfilComponent,
    KlinikePacijentaComponent
  ],
  imports: [
    CommonModule,
    PacCompModule,
    RouterModule.forChild(PacijentLayoutRutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    DropdownListModule
  ],
  exports: [PacijentLayoutComponent
  ]
})
export class PacijentLayoutModule { }
