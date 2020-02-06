import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { Ng2BootstrapModule } from 'ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule

  ]
})
export class ComponentsModule { }
