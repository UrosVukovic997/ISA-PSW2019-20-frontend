import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { ComponentsModule } from './administrator-kc/components/components.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {RegZahtrviService} from './service/administrator-kc-service/reg-zahtrvi.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    ToastrModule.forRoot()

  ],
  declarations: [
    AppComponent,
    AdminKcLayoutComponent

  ],
  providers: [RegZahtrviService],
  bootstrap: [AppComponent]
})
export class AppModule { }
