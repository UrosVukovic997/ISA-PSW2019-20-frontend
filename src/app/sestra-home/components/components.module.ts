import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarSestraComponent } from './sidebar-sestra/sidebar-sestra.component';



@NgModule({
  declarations: [ NavbarComponent, SidebarSestraComponent],
  exports: [
    SidebarSestraComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
         NgbModule
    ]
})
export class ComponentsModuleSestra { }
