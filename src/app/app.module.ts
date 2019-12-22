import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { ComponentsModule } from './administrator-kc/components/components.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {RegZahtrviService} from './service/administrator-kc-service/reg-zahtrvi.service';
import { RegComponent } from './registracija/reg/reg.component';
import { LogovanjeComponent } from './registracija/logovanje/logovanje.component';
import { PotvrdaComponent } from './administrator-kc/potvrda/potvrda.component';
import { WelcomePageComponent } from './administrator-kc/welcome-page/welcome-page.component';
import { ProfileComponent } from './administrator-kc/profile/profile.component';
import { ForbiddenComponent } from './administrator-kc/forbidden/forbidden.component';
import { SestraLayoutComponent } from './sestra-home/sestra-layout/sestra-layout.component';
import {ComponentsModuleSestra} from './sestra-home/components/components.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ComponentsModuleSestra

  ],
  declarations: [
    AppComponent,
    AdminKcLayoutComponent,
    RegComponent,
    LogovanjeComponent,
    PotvrdaComponent,
    ForbiddenComponent,
    SestraLayoutComponent

  ],
  providers: [RegZahtrviService],
  bootstrap: [AppComponent]
})
export class AppModule { }
