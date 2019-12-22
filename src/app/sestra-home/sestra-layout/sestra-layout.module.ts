import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModuleSestra} from '../components/components.module';
import {DropdownListModule} from 'ngx-dropdown-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModuleSestra,
    ReactiveFormsModule,
    DropdownListModule
  ]
})
export class SestraLayoutModule { }
