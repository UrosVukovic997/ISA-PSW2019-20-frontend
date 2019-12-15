import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLekarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { Ng2BootstrapModule } from 'ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SidebarLekarComponent],
  exports: [
    SidebarLekarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Ng2BootstrapModule,
    NgbModule
  ]
})
export class ComponentsModule { }
