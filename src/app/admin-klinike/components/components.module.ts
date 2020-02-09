import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarAdminKlinikeComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { Ng2BootstrapModule } from 'ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarAdminKlinikeComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SidebarAdminKlinikeComponent,
    NavbarAdminKlinikeComponent],
  exports: [
    SidebarAdminKlinikeComponent,
    NavbarAdminKlinikeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class ComponentsAdminKlinikeModule { }
