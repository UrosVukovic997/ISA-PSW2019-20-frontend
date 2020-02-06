import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacSidebarComponent } from './pac-sidebar/pac-sidebar.component';
import {RouterModule} from '@angular/router';
import { PacNavbarComponent } from './pac-navbar/pac-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [PacSidebarComponent, PacNavbarComponent],
  exports: [PacSidebarComponent, PacNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class PacCompModule { }
